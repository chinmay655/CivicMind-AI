import traceback
from fastapi import (
    APIRouter,
    Depends,
    UploadFile,
    File,
    Form,
    HTTPException,
    status,
)
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user
from app.db.session import get_db

from app.models.user import User

from app.repositories.complaint_repository import ComplaintRepository
from app.repositories.complaint_image_repository import (
    ComplaintImageRepository,
)
from app.repositories.complaint_history_repository import (
    ComplaintHistoryRepository,
)

from app.schemas.complaint import (
    ComplaintCreate,
    ComplaintResponse,
)

from app.services.complaint_service import ComplaintService
from app.services.complaint_image_service import (
    ComplaintImageService,
)
from app.services.complaint_history_service import (
    ComplaintHistoryService,
)

from app.storage.storage_service import StorageService

router = APIRouter(
    prefix="/complaints",
    tags=["Complaint Report"],
)

@router.post(
    "/report",
    response_model=ComplaintResponse,
    status_code=status.HTTP_201_CREATED,
)

async def report_complaint(
    title: str = Form(...),
    description: str = Form(...),
    category: str = Form(...),
    latitude: float = Form(...),
    longitude: float = Form(...),
    image: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    """
    Complete complaint reporting workflow.

    Steps:
    1. Save uploaded image
    2. Create complaint
    3. Store image record
    4. Run AI analysis
    5. Auto assign officer
    6. Create complaint history
    """

    # Initialize repositories
    complaint_repository = ComplaintRepository(db)

    complaint_image_repository = ComplaintImageRepository(db)

    complaint_history_repository = ComplaintHistoryRepository(db)

    # Initialize services
    complaint_service = ComplaintService(
        complaint_repository
    )

    complaint_image_service = ComplaintImageService(
        complaint_image_repository,
        complaint_repository,
    )

    complaint_history_service = ComplaintHistoryService(
        complaint_history_repository
    )

    storage_service = StorageService()

    try:
        # Save uploaded image
        image_path = await storage_service.save_image(image)

        # Create Complaint Schema
        complaint_data = ComplaintCreate(
            title=title,
            category=category,
            description=description,
            latitude=latitude,
            longitude=longitude,
            address="Address not available",
        )

        # Save Complaint
        complaint = await complaint_service.create_complaint(
            complaint=complaint_data,
            citizen_id=current_user.id,
        )

        # Save image & trigger AI analysis
        await complaint_image_service.upload_image(
            complaint.id,
            image_path,
        )

        # Record history
        '''await complaint_history_service.record_history(
            complaint_id=complaint.id,
            performed_by=current_user.id,
            action="Complaint Created",
            old_status=None,
            new_status=complaint.status.value,
            remarks="Complaint submitted successfully.",
        )'''

        # Reload complaint
        updated_complaint = await complaint_service.get_complaint(
            complaint.id
        )

        await complaint_history_service.record_history(
            complaint_id=updated_complaint.id,
            performed_by=current_user.id,
            action="Complaint Created",
            old_status=None,
            new_status=updated_complaint.status.value,
            remarks="Complaint submitted successfully.",
        )

        return updated_complaint

    except Exception as e:
        await db.rollback()

        print("\n" + "=" * 80)
        traceback.print_exc()
        print("=" * 80 + "\n")

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )