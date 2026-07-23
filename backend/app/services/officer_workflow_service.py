from fastapi import HTTPException

from app.models.complaint import ComplaintStatus
from app.repositories.officer_workflow_repository import (
    OfficerWorkflowRepository,
)
from app.schemas.officer_workflow import (
    ComplaintWorkflowResponse,
)


class OfficerWorkflowService:

    def __init__(
        self,
        repository: OfficerWorkflowRepository,
    ):
        self.repository = repository

    async def accept_complaint(
        self,
        complaint_id: int,
    ):
        complaint = await self.repository.get_complaint(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=404,
                detail="Complaint not found.",
            )

        complaint.status = ComplaintStatus.ACCEPTED

        await self.repository.save()
        await self.repository.refresh(complaint)

        return ComplaintWorkflowResponse(
            id=complaint.id,
            title=complaint.title,
            status=complaint.status.value,
        )

    async def start_work(
        self,
        complaint_id: int,
    ):
        complaint = await self.repository.get_complaint(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=404,
                detail="Complaint not found.",
            )

        complaint.status = ComplaintStatus.IN_PROGRESS

        await self.repository.save()
        await self.repository.refresh(complaint)

        return ComplaintWorkflowResponse(
            id=complaint.id,
            title=complaint.title,
            status=complaint.status.value,
        )

    async def resolve_complaint(
        self,
        complaint_id: int,
    ):
        complaint = await self.repository.get_complaint(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=404,
                detail="Complaint not found.",
            )

        complaint.status = ComplaintStatus.RESOLVED

        await self.repository.save()
        await self.repository.refresh(complaint)

        return ComplaintWorkflowResponse(
            id=complaint.id,
            title=complaint.title,
            status=complaint.status.value,
        )
    async def my_complaints(
        self,
        officer_id: int,
    ):
        complaints = (
            await self.repository.get_officer_complaints(
                officer_id
            )
        )

        return [
            ComplaintWorkflowResponse(
                id=complaint.id,
                title=complaint.title,
                description=complaint.description,
                status=complaint.status.value,
            )
            for complaint in complaints
        ]