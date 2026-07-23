from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.officer_workflow_repository import (
    OfficerWorkflowRepository,
)
from app.schemas.officer_workflow import (
    ComplaintWorkflowResponse,
)
from app.services.officer_workflow_service import (
    OfficerWorkflowService,
)

router = APIRouter(
    prefix="/officer",
    tags=["Officer Workflow"],
)


@router.get(
    "/my-complaints",
    response_model=list[ComplaintWorkflowResponse],
)
async def my_complaints(
    officer_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerWorkflowRepository(db)

    service = OfficerWorkflowService(repository)

    return await service.my_complaints(
        officer_id
    )


@router.patch(
    "/{complaint_id}/accept",
    response_model=ComplaintWorkflowResponse,
)
async def accept(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerWorkflowRepository(db)

    service = OfficerWorkflowService(repository)

    return await service.accept_complaint(
        complaint_id
    )


@router.patch(
    "/{complaint_id}/start",
    response_model=ComplaintWorkflowResponse,
)
async def start(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerWorkflowRepository(db)

    service = OfficerWorkflowService(repository)

    return await service.start_work(
        complaint_id
    )


@router.patch(
    "/{complaint_id}/resolve",
    response_model=ComplaintWorkflowResponse,
)
async def resolve(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerWorkflowRepository(db)

    service = OfficerWorkflowService(repository)

    return await service.resolve_complaint(
        complaint_id
    )