from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint import Complaint


class OfficerWorkflowRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_complaint(self, complaint_id: int):
        result = await self.db.execute(
            select(Complaint).where(
                Complaint.id == complaint_id
            )
        )
        return result.scalar_one_or_none()

    async def get_officer_complaints(
        self,
        officer_id: int,
    ):
        result = await self.db.execute(
            select(Complaint).where(
                Complaint.assigned_officer_id == officer_id
            )
        )

        return result.scalars().all()

    async def save(self):
        await self.db.commit()

    async def refresh(self, complaint):
        await self.db.refresh(complaint)