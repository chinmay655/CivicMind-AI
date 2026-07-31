from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.api.dependencies import get_current_user
from app.db.session import get_db

from app.models.user import User

from app.repositories.citizen_repository import CitizenRepository
from app.schemas.complaint import ComplaintResponse
from app.services.citizen_service import CitizenService
from app.schemas.citizen import CitizenDashboardResponse

router = APIRouter(
    prefix="/citizens",
    tags=["Citizen"],
)


@router.get(
    "/my-complaints",
    response_model=list[ComplaintResponse],
)
async def get_my_complaints(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    repository = CitizenRepository(db)
    service = CitizenService(repository)

    return await service.get_my_complaints(
        current_user.id
    )


@router.get(
    "/my-complaints/{complaint_id}",
    response_model=ComplaintResponse,
)
async def get_my_complaint(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    repository = CitizenRepository(db)
    service = CitizenService(repository)

    return await service.get_my_complaint(
        complaint_id,
        current_user.id,
    )


@router.get(
    "/dashboard",
    response_model=CitizenDashboardResponse,
)
async def get_dashboard(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    repository = CitizenRepository(db)
    service = CitizenService(repository)

    return await service.get_dashboard_stats(
        current_user.id
    )