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