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

router = APIRouter(
    prefix="/complaints",
    tags=["Complaints"],
)


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

    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.create_complaint(
        complaint=complaint,
        citizen_id=current_user.id,
    )


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