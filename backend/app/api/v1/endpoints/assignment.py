from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db

from app.repositories.assignment_repository import AssignmentRepository
from app.repositories.complaint_history_repository import (
    ComplaintHistoryRepository,
)

from app.schemas.assignment import (
    ComplaintAssignmentRequest,
    ComplaintAssignmentResponse,
)

from app.services.assignment_service import AssignmentService
from app.services.complaint_history_service import (
    ComplaintHistoryService,
)

router = APIRouter(
    prefix="/assignments",
    tags=["Assignments"],
)


@router.put(
    "/{complaint_id}",
    response_model=ComplaintAssignmentResponse,
)
async def assign_complaint(
    complaint_id: int,
    request: ComplaintAssignmentRequest,
    db: AsyncSession = Depends(get_db),
):
    assignment_repository = AssignmentRepository(db)

    history_repository = ComplaintHistoryRepository(db)
    history_service = ComplaintHistoryService(
        history_repository
    )

    service = AssignmentService(
        assignment_repository,
        history_service,
    )

    return await service.assign_complaint(
        complaint_id,
        request,
    )