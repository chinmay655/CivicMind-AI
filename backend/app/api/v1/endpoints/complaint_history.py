from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.complaint_history_repository import (
    ComplaintHistoryRepository,
)
from app.schemas.complaint_history import ComplaintHistoryResponse
from app.services.complaint_history_service import ComplaintHistoryService

router = APIRouter(
    prefix="/complaints",
    tags=["Complaint History"],
)


@router.get(
    "/{complaint_id}/timeline",
    response_model=list[ComplaintHistoryResponse],
)
async def get_complaint_timeline(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintHistoryRepository(db)
    service = ComplaintHistoryService(repository)

    return await service.get_timeline(complaint_id)