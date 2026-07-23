from datetime import datetime

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint import Complaint
from app.models.department import Department
from app.models.user import User


class AssignmentRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_complaint(self, complaint_id: int):
        result = await self.db.execute(
            select(Complaint).where(Complaint.id == complaint_id)
        )
        return result.scalar_one_or_none()

    async def get_department(self, department_id: int):
        result = await self.db.execute(
            select(Department).where(Department.id == department_id)
        )
        return result.scalar_one_or_none()

    async def get_officer(self, officer_id: int):
        result = await self.db.execute(
            select(User).where(User.id == officer_id)
        )
        return result.scalar_one_or_none()

    async def assign(
        self,
        complaint: Complaint,
        department_id: int,
        officer_id: int,
    ):
        complaint.assigned_department_id = department_id
        complaint.assigned_officer_id = officer_id
        complaint.assigned_at = datetime.utcnow()

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint
    async def officer_belongs_to_department(
        self,
        officer_id: int,
        department_id: int,
    ):
        result = await self.db.execute(
            select(User).where(
                User.id == officer_id,
                User.department_id == department_id,
            )
        )

        return result.scalar_one_or_none()