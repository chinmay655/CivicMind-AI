'''from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint import Complaint, ComplaintStatus, ComplaintPriority


class DashboardRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def total_complaints(self):
        result = await self.db.execute(
            select(func.count(Complaint.id))
        )
        return result.scalar()

    async def count_by_status(self, status: ComplaintStatus):
        result = await self.db.execute(
            select(func.count(Complaint.id))
            .where(Complaint.status == status)
        )
        return result.scalar()

    async def count_by_priority(self, priority: ComplaintPriority):
        result = await self.db.execute(
            select(func.count(Complaint.id))
            .where(Complaint.priority == priority)
        )
        return result.scalar()'''

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import extract
import calendar

from app.models.complaint import (
    Complaint,
    ComplaintPriority,
    ComplaintStatus,
)


class DashboardRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def get_dashboard_stats(self):
        total = (
            await self.db.execute(
                select(func.count(Complaint.id))
            )
        ).scalar()

        pending = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.PENDING
                )
            )
        ).scalar()

        in_progress = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.IN_PROGRESS
                )
            )
        ).scalar()

        resolved = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.RESOLVED
                )
            )
        ).scalar()

        rejected = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.REJECTED
                )
            )
        ).scalar()

        low = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.priority == ComplaintPriority.LOW
                )
            )
        ).scalar()

        medium = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.priority == ComplaintPriority.MEDIUM
                )
            )
        ).scalar()

        high = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.priority == ComplaintPriority.HIGH
                )
            )
        ).scalar()

        critical = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.priority == ComplaintPriority.CRITICAL
                )
            )
        ).scalar()

        return {
            "total_complaints": total,
            "pending": pending,
            "in_progress": in_progress,
            "resolved": resolved,
            "rejected": rejected,
            "low": low,
            "medium": medium,
            "high": high,
            "critical": critical,
        }
    async def get_recent_complaints(self, limit: int = 5):

        result = await self.db.execute(
            select(Complaint)
            .order_by(desc(Complaint.created_at))
            .limit(limit)
        )

        return result.scalars().all()
    
    async def get_monthly_complaints(self):
        result = await self.db.execute(
            select(
                extract("month", Complaint.created_at).label("month"),
                func.count(Complaint.id).label("count"),
            )
            .group_by(extract("month", Complaint.created_at))
            .order_by(extract("month", Complaint.created_at))
        )

        rows = result.all()

        return [
            {
                "month": calendar.month_name[int(row.month)],
                "count": row.count,
            }
            for row in rows
        ]

    async def get_hotspots(self, limit: int = 10):
        result = await self.db.execute(
            select(
                Complaint.address,
                func.count(Complaint.id).label("complaints"),
            )
            .group_by(Complaint.address)
            .order_by(func.count(Complaint.id).desc())
            .limit(limit)
        )

        rows = result.all()

        return [
            {
                "address": row.address,
                "complaints": row.complaints,
            }
            for row in rows
        ]
    
    async def get_priority_distribution(self):
        result = await self.db.execute(
            select(
                Complaint.priority,
                func.count(Complaint.id).label("count"),
            )
            .group_by(Complaint.priority)
            .order_by(Complaint.priority)
        )

        rows = result.all()

        return [
            {
                "priority": row.priority.value,
                "count": row.count,
            }
            for row in rows
        ]
    
    async def get_status_distribution(self):
        result = await self.db.execute(
            select(
                Complaint.status,
                func.count(Complaint.id).label("count"),
            )
            .group_by(Complaint.status)
            .order_by(Complaint.status)
        )

        rows = result.all()

        return [
            {
                "status": row.status.value,
                "count": row.count,
            }
            for row in rows
        ]
    
    async def get_map_complaints(self):
        result = await self.db.execute(
            select(Complaint)
        )

        complaints = result.scalars().all()

        return [
            {
                "id": complaint.id,
                "title": complaint.title,
                "latitude": complaint.latitude,
                "longitude": complaint.longitude,
                "address": complaint.address,
                "status": complaint.status.value,
                "priority": complaint.priority.value,
            }
            for complaint in complaints
        ]
    
    async def get_performance(self):
        total = (
            await self.db.execute(
                select(func.count(Complaint.id))
            )
        ).scalar() or 0

        resolved = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.RESOLVED
                )
            )
        ).scalar() or 0

        pending = (
            await self.db.execute(
                select(func.count(Complaint.id)).where(
                    Complaint.status == ComplaintStatus.PENDING
                )
            )
        ).scalar() or 0

        resolution_rate = 0.0

        if total > 0:
            resolution_rate = round((resolved / total) * 100, 2)

        return {
            "total_complaints": total,
            "resolved_complaints": resolved,
            "pending_complaints": pending,
            "resolution_rate": resolution_rate,
        }