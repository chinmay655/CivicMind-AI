from fastapi import HTTPException, status

from app.repositories.citizen_repository import CitizenRepository


class CitizenService:
    def __init__(self, repository: CitizenRepository):
        self.repository = repository

    async def get_my_complaints(
        self,
        citizen_id: int,
    ):
        return await self.repository.get_my_complaints(
            citizen_id
        )

    async def get_my_complaint(
        self,
        complaint_id: int,
        citizen_id: int,
    ):
        complaint = await self.repository.get_my_complaint(
            complaint_id,
            citizen_id,
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found.",
            )

        return complaint

    async def get_dashboard_stats(
        self,
        citizen_id: int,    
    ):
        total = await self.repository.get_total_complaints(
            citizen_id
        )

        pending = await self.repository.get_pending_complaints(
            citizen_id
        )

        assigned = await self.repository.get_assigned_complaints(
            citizen_id
        )

        accepted = await self.repository.get_accepted_complaints(
            citizen_id
        )

        in_progress = await self.repository.get_in_progress_complaints(
            citizen_id
        )

        resolved = await self.repository.get_resolved_complaints(
            citizen_id
        )

        rejected = await self.repository.get_rejected_complaints(
            citizen_id
        )

        recent = await self.repository.get_recent_complaints(
            citizen_id
        )

        return {
            "total_complaints": total,
            "pending_complaints": pending,
            "assigned_complaints": assigned,
            "accepted_complaints": accepted,
            "in_progress_complaints": in_progress,
            "resolved_complaints": resolved,
            "rejected_complaints": rejected,
            "recent_complaints": recent,
        }