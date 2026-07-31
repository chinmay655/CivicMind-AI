from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.complaint import Complaint, ComplaintStatus


class CitizenRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_my_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(Complaint)
            .where(Complaint.citizen_id == citizen_id)
            .order_by(Complaint.created_at.desc())
        )
        return result.scalars().all()

    async def get_my_complaint(
        self,
        complaint_id: int,
        citizen_id: int,
    ):
        result = await self.db.execute(
            select(Complaint).where(
                Complaint.id == complaint_id,
                Complaint.citizen_id == citizen_id,
            )
        )
        return result.scalar_one_or_none()

    async def get_total_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id
            )
        )
        return result.scalar()

    async def get_pending_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.PENDING,
            )
        )
        return result.scalar()

    async def get_resolved_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.RESOLVED,
            )
        )
        return result.scalar()

    async def get_assigned_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.ASSIGNED,
            )
        )
        return result.scalar()

    async def get_accepted_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.ACCEPTED,
            )
        )
        return result.scalar()

    async def get_in_progress_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.IN_PROGRESS,
            )
        )
        return result.scalar()

    async def get_rejected_complaints(self, citizen_id: int):
        result = await self.db.execute(
            select(func.count(Complaint.id)).where(
                Complaint.citizen_id == citizen_id,
                Complaint.status == ComplaintStatus.REJECTED,
            )
        )
        return result.scalar()

    async def get_recent_complaints(
        self,
        citizen_id: int,
        limit: int = 5,
    ):
        result = await self.db.execute(
            select(Complaint)
            .where(
                Complaint.citizen_id == citizen_id
            )
            .order_by(
                Complaint.created_at.desc()
            )
            .limit(limit)
        )

        return result.scalars().all()