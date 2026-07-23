from fastapi import HTTPException, status

from app.models.department import Department
from app.repositories.department_repository import DepartmentRepository
from app.schemas.department import (
    DepartmentCreate,
    DepartmentResponse,
    DepartmentUpdate,
)


class DepartmentService:

    def __init__(self, repository: DepartmentRepository):
        self.repository = repository

    async def create_department(
        self,
        request: DepartmentCreate,
    ):
        existing_department = await self.repository.get_by_name(
            request.name
        )

        if existing_department:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Department already exists.",
            )

        department = Department(
            name=request.name,
            description=request.description,
        )

        department = await self.repository.create(department)

        return DepartmentResponse.model_validate(department)

    async def get_departments(self):
        departments = await self.repository.get_all()

        return [
            DepartmentResponse.model_validate(department)
            for department in departments
        ]

    async def get_department(
        self,
        department_id: int,
    ):
        department = await self.repository.get_by_id(
            department_id
        )

        if department is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Department not found.",
            )

        return DepartmentResponse.model_validate(department)