from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.user import User
from app.db.session import get_db
from app.repositories.department_repository import DepartmentRepository
from app.repositories.officer_repository import OfficerRepository
from app.schemas.officer import (
    OfficerCreate,
    OfficerResponse,
)
from app.services.officer_service import OfficerService
from app.api.dependencies import require_officer
from app.repositories.complaint_repository import ComplaintRepository
from app.services.complaint_service import ComplaintService
from app.schemas.complaint import ComplaintResponse
from app.schemas.officer_dashboard import OfficerDashboardResponse

router = APIRouter(
    prefix="/officers",
    tags=["Officers"],
)


@router.post(
    "",
    response_model=OfficerResponse,
    status_code=201,
)
async def create_officer(
    request: OfficerCreate,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerRepository(db)
    department_repository = DepartmentRepository(db)

    service = OfficerService(
        repository,
        department_repository,
    )

    return await service.create_officer(request)


@router.get(
    "",
    response_model=list[OfficerResponse],
)
async def get_officers(
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerRepository(db)
    department_repository = DepartmentRepository(db)

    service = OfficerService(
        repository,
        department_repository,
    )

    return await service.get_officers()


@router.get(
    "/{officer_id}",
    response_model=OfficerResponse,
)
async def get_officer(
    officer_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = OfficerRepository(db)
    department_repository = DepartmentRepository(db)

    service = OfficerService(
        repository,
        department_repository,
    )

    return await service.get_officer(
        officer_id
    )

@router.get(
    "/my-complaints",
    response_model=list[ComplaintResponse],
)
async def my_complaints(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_officer),
):
    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.get_officer_complaints(
        current_user.id
    )

@router.get(
    "/dashboard",
    response_model=OfficerDashboardResponse,
)
async def officer_dashboard(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_officer),
):
    repository = ComplaintRepository(db)
    service = ComplaintService(repository)

    return await service.get_officer_dashboard(
        current_user.id
    )