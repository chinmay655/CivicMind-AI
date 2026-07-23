from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user
from app.db.session import get_db
from app.models.user import User
from app.repositories.complaint_repository import ComplaintRepository
from app.schemas.complaint import (
    ComplaintCreate,
    ComplaintUpdate,
    ComplaintResponse,
)
from app.services.complaint_service import ComplaintService
from app.repositories.complaint_history_repository import ComplaintHistoryRepository
from app.services.complaint_history_service import ComplaintHistoryService
router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"],
)


'''@router.post(
    "/",
    response_model=ComplaintResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_complaint(
    complaint: ComplaintCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.create_complaint(
        complaint=complaint,
        citizen_id=current_user.id,
    )'''

@router.post(
    "/",
    response_model=ComplaintResponse,
    status_code=status.HTTP_201_CREATED,
)
async def create_complaint(
    complaint: ComplaintCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    complaint_repository = ComplaintRepository(db)
    complaint_service = ComplaintService(complaint_repository)

    history_repository = ComplaintHistoryRepository(db)
    history_service = ComplaintHistoryService(history_repository)

    # Create Complaint
    new_complaint = await complaint_service.create_complaint(
        complaint=complaint,
        citizen_id=current_user.id,
    )

    # Record Timeline
    await history_service.record_history(
        complaint_id=new_complaint.id,
        performed_by=current_user.id,
        action="Complaint Created",
        old_status=None,
        new_status=new_complaint.status.value,
        remarks="Complaint submitted successfully.",
    )

    return new_complaint

@router.get(
    "/",
    response_model=list[ComplaintResponse],
)
async def get_all_complaints(
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.get_all_complaints()


@router.get(
    "/{complaint_id}",
    response_model=ComplaintResponse,
)
async def get_complaint(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    complaint = await service.get_complaint(complaint_id)

    if complaint is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Complaint not found",
        )

    return complaint

@router.put("/{complaint_id}", response_model=ComplaintResponse)
async def update_complaint(
    complaint_id: int,
    complaint_update: ComplaintUpdate,
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.update_complaint(
        complaint_id,
        complaint_update,
    )