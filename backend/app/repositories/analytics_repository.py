from sqlalchemy import func, select

from app.models.complaint import Complaint


class AnalyticsRepository:

    def __init__(self, db):
        self.db = db

    async def total_complaints(self):
        result = await self.db.execute(
            select(func.count(Complaint.id))
        )
        return result.scalar()

    async def complaints_by_status(self):
        result = await self.db.execute(
            select(
                Complaint.status,
                func.count(Complaint.id),
            ).group_by(Complaint.status)
        )

        return result.all()

    async def complaints_by_priority(self):
        result = await self.db.execute(
            select(
                Complaint.priority,
                func.count(Complaint.id),
            ).group_by(Complaint.priority)
        )

        return result.all()

    async def total_estimated_cost(self):
        result = await self.db.execute(
            select(func.sum(Complaint.ai_estimated_cost))
        )

        return result.scalar() or 0

    async def complaints_by_ai_issue(self):
        result = await self.db.execute(
            select(
                Complaint.ai_detected_issue,
                func.count(Complaint.id),
            )
            .group_by(
                Complaint.ai_detected_issue
            )
        )

        return result.all()