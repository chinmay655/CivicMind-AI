from app.models.complaint import Complaint
from app.repositories.complaint_repository import ComplaintRepository
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate


class ComplaintService:
    def __init__(self, repository: ComplaintRepository):
        self.repository = repository

    async def create_complaint(
        self,
        complaint: ComplaintCreate,
        citizen_id: int,
    ) -> Complaint:
        return await self.repository.create(
            complaint=complaint,
            citizen_id=citizen_id,
        )

    async def get_complaint(
        self,
        complaint_id: int,
    ) -> Complaint | None:
        return await self.repository.get_by_id(complaint_id)

    async def get_all_complaints(self) -> list[Complaint]:
        return await self.repository.get_all()

    async def update_complaint(
        self,
        db_complaint: Complaint,
        complaint_update: ComplaintUpdate,
    ) -> Complaint:
        return await self.repository.update(
            db_complaint=db_complaint,
            complaint_update=complaint_update,
        )

    async def delete_complaint(
        self,
        db_complaint: Complaint,
    ) -> None:
        await self.repository.delete(db_complaint)