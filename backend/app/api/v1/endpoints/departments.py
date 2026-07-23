from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.department_repository import DepartmentRepository
from app.schemas.department import (
    DepartmentCreate,
    DepartmentResponse,
)
from app.services.department_service import DepartmentService

router = APIRouter(
    prefix="/departments",
    tags=["Departments"],
)


@router.post(
    "",
    response_model=DepartmentResponse,
    status_code=201,
)
async def create_department(
    request: DepartmentCreate,
    db: AsyncSession = Depends(get_db),
):
    repository = DepartmentRepository(db)
    service = DepartmentService(repository)

    return await service.create_department(request)


@router.get(
    "",
    response_model=list[DepartmentResponse],
)
async def get_departments(
    db: AsyncSession = Depends(get_db),
):
    repository = DepartmentRepository(db)
    service = DepartmentService(repository)

    return await service.get_departments()


@router.get(
    "/{department_id}",
    response_model=DepartmentResponse,
)
async def get_department(
    department_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = DepartmentRepository(db)
    service = DepartmentService(repository)

    return await service.get_department(department_id)