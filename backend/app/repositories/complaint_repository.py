'''from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint import Complaint
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate


class ComplaintRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(
        self,
        complaint: ComplaintCreate,
        citizen_id: int,
    ) -> Complaint:
        db_complaint = Complaint(
            title=complaint.title,
            description=complaint.description,
            priority=complaint.priority,
            latitude=complaint.latitude,
            longitude=complaint.longitude,
            address=complaint.address,
            citizen_id=citizen_id,
        )

        self.db.add(db_complaint)
        await self.db.commit()
        await self.db.refresh(db_complaint)

        return db_complaint

    async def get_by_id(self, complaint_id: int) -> Complaint | None:
        result = await self.db.execute(
            select(Complaint).where(Complaint.id == complaint_id)
        )
        return result.scalar_one_or_none()

    async def get_all(self) -> list[Complaint]:
        result = await self.db.execute(select(Complaint))
        return result.scalars().all()

    async def update(
        self,
        db_complaint: Complaint,
        complaint_update: ComplaintUpdate,
    ) -> Complaint:
        update_data = complaint_update.model_dump(exclude_unset=True)

        for field, value in update_data.items():
            setattr(db_complaint, field, value)

        await self.db.commit()
        await self.db.refresh(db_complaint)

        return db_complaint

    async def delete(self, db_complaint: Complaint) -> None:
        await self.db.delete(db_complaint)
        await self.db.commit()

    async def update(self, complaint, complaint_data):
        for key, value in complaint_data.items():
            setattr(complaint, key, value)

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint
    
    async def update_ai_analysis(
        self,
        complaint: Complaint,
        analysis: dict,
    ):
        complaint.ai_detected_issue = analysis["issue_type"]
        complaint.ai_confidence = analysis["confidence"]
        complaint.priority = analysis["severity"]
        complaint.ai_estimated_cost = analysis["estimated_cost"]
        complaint.ai_recommended_department = analysis["recommended_department"]
        complaint.ai_analysis_status = "Completed"

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint     '''

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint import Complaint
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate
from datetime import datetime

from app.models.complaint import ComplaintStatus

from sqlalchemy import select

class ComplaintRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(
        self,
        complaint: ComplaintCreate,
        citizen_id: int,
    ) -> Complaint:
        db_complaint = Complaint(
            title=complaint.title,
            category=complaint.category,
            description=complaint.description,
            priority=complaint.priority,
            latitude=complaint.latitude,
            longitude=complaint.longitude,
            address=complaint.address,
            citizen_id=citizen_id,
        )

        self.db.add(db_complaint)
        await self.db.commit()
        await self.db.refresh(db_complaint)

        return db_complaint

    async def get_by_id(
        self,
        complaint_id: int,
    ) -> Complaint | None:
        result = await self.db.execute(
            select(Complaint).where(
                Complaint.id == complaint_id
            )
        )
        return result.scalar_one_or_none()

    async def get_all(self) -> list[Complaint]:
        result = await self.db.execute(
            select(Complaint)
        )
        return result.scalars().all()

    async def update(
        self,
        complaint: Complaint,
        complaint_data: dict,
    ) -> Complaint:
        for key, value in complaint_data.items():
            setattr(complaint, key, value)

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint

    async def delete(
        self,
        complaint: Complaint,
    ) -> None:
        await self.db.delete(complaint)
        await self.db.commit()

    async def update_ai_analysis(
        self,
        complaint: Complaint,
        analysis: dict,
    ) -> Complaint:

        complaint.ai_detected_issue = analysis["issue_type"]
        complaint.ai_confidence = analysis["confidence"]
        complaint.priority = analysis["severity"]
        complaint.ai_estimated_cost = analysis["estimated_cost"]
        complaint.ai_recommended_department = analysis[
            "recommended_department"
        ]
        complaint.ai_analysis_status = "Completed"

        # No commit here.
        # ComplaintImageService will commit everything together.
        return complaint  


    async def assign_officer(
        self,
        complaint: Complaint,
        officer_id: int,
    ):
        complaint.assigned_officer_id = officer_id
        complaint.status = ComplaintStatus.ASSIGNED
        complaint.assigned_at = datetime.utcnow()

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint

    async def accept_assignment(
        self,
        complaint: Complaint,
    ) -> Complaint:

        complaint.status = ComplaintStatus.ACCEPTED

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint

    async def start_work(
        self,
        complaint: Complaint,
    ) -> Complaint:

        complaint.status = ComplaintStatus.IN_PROGRESS
        complaint.started_at = datetime.utcnow()

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint
    async def resolve_complaint(
        self,
        complaint: Complaint,
    ) -> Complaint:

        complaint.status = ComplaintStatus.RESOLVED
        complaint.resolved_at = datetime.utcnow()

        await self.db.commit()
        await self.db.refresh(complaint)

        return complaint

    async def get_by_officer(
        self,
        officer_id: int,
    ):
        result = await self.db.execute(
            select(Complaint)
            .where(
                Complaint.assigned_officer_id == officer_id
            )
            .order_by(Complaint.created_at.desc())
        )

        return result.scalars().all()

    async def get_officer_dashboard(
        self,
        officer_id: int,
    ):
        complaints = await self.get_by_officer(officer_id)

        return {
            "total_assigned": len(complaints),
            "accepted": sum(c.status == ComplaintStatus.ACCEPTED for c in complaints),
            "in_progress": sum(c.status == ComplaintStatus.IN_PROGRESS for c in complaints),
            "resolved": sum(c.status == ComplaintStatus.RESOLVED for c in complaints),
            "pending_today": sum(
                c.created_at.date() == date.today()
                for c in complaints
                if c.status == ComplaintStatus.ASSIGNED
            ),
        }

    async def get_dashboard_statistics(self):
        complaints = await self.get_all()

        return {
            "total_complaints": len(complaints),
            "pending": sum(c.status == ComplaintStatus.PENDING for c in complaints),
            "assigned": sum(c.status == ComplaintStatus.ASSIGNED for c in complaints),
            "accepted": sum(c.status == ComplaintStatus.ACCEPTED for c in complaints),
            "in_progress": sum(c.status == ComplaintStatus.IN_PROGRESS for c in complaints),
            "resolved": sum(c.status == ComplaintStatus.RESOLVED for c in complaints),
            "rejected": sum(c.status == ComplaintStatus.REJECTED for c in complaints),
        }   