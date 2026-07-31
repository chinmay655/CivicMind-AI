from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.user import User
from sqlalchemy import func
from app.models.complaint import Complaint, ComplaintStatus

class OfficerRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_all(self):
        result = await self.db.execute(select(User))
        return result.scalars().all()

    async def get_by_id(self, officer_id: int):
        result = await self.db.execute(
            select(User).where(User.id == officer_id)
        )
        return result.scalar_one_or_none()

    async def get_by_email(self, email: str):
        result = await self.db.execute(
            select(User).where(User.email == email)
        )
        return result.scalar_one_or_none()

    async def create(self, officer: User):
        self.db.add(officer)
        await self.db.commit()
        await self.db.refresh(officer)
        return officer

    async def get_total_assigned(self, officer_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.assigned_officer_id == officer_id
            )
        )
        return result.scalar()

    async def get_pending_complaints(self, officer_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.assigned_officer_id == officer_id,
                Complaint.status == ComplaintStatus.PENDING,
            )
        )
        return result.scalar()

    async def get_accepted_complaints(self, officer_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.assigned_officer_id == officer_id,
                Complaint.status == ComplaintStatus.ACCEPTED,
            )
        )
        return result.scalar()

    async def get_in_progress_complaints(self, officer_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.assigned_officer_id == officer_id,
                Complaint.status == ComplaintStatus.IN_PROGRESS,
            )
        )
        return result.scalar()

    async def get_resolved_complaints(self, officer_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.assigned_officer_id == officer_id,
                Complaint.status == ComplaintStatus.RESOLVED,
            )
        )
        return result.scalar()

    async def get_assigned_complaints(
        self,
        officer_id: int,
        limit: int = 10,
    ):
        result = await self.db.execute(
            select(Complaint)
            .where(
                Complaint.assigned_officer_id == officer_id
            )
            .order_by(
                Complaint.created_at.desc()
            )
            .limit(limit)
        )

        return result.scalars().all()