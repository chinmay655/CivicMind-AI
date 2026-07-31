from datetime import datetime

from fastapi import HTTPException, status

from app.models.complaint import ComplaintStatus
from app.repositories.complaint_repository import ComplaintRepository
from app.repositories.user_repository import UserRepository


class ComplaintAssignmentService:
    def __init__(
        self,
        complaint_repository: ComplaintRepository,
        user_repository: UserRepository,
    ):
        self.complaint_repository = complaint_repository
        self.user_repository = user_repository

    async def assign_officer(
        self,
        complaint_id: int,
        officer_id: int,
    ):
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        officer = await self.user_repository.get_by_id(
            officer_id
        )

        if officer is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Officer not found",
            )

        if officer.role.name != "Officer":
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Selected user is not an officer",
            )

        if complaint.status in (
            ComplaintStatus.RESOLVED,
            ComplaintStatus.REJECTED,
        ):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint cannot be assigned",
            )

        if complaint.assigned_officer_id == officer.id:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint is already assigned to this officer.",
            )

        return await self.complaint_repository.assign_officer(
            complaint,
            officer.id,
        )

    async def accept_assignment(
        self,
        complaint_id: int,
        officer_id: int,
    ):
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        if complaint.assigned_officer_id != officer_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        if complaint.status != ComplaintStatus.ASSIGNED:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint cannot be accepted.",
            )

        return await self.complaint_repository.accept_assignment(
            complaint
        )

    async def start_work(
        self,
        complaint_id: int,
        officer_id: int,
    ):
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        if complaint.assigned_officer_id != officer_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        if complaint.status != ComplaintStatus.ACCEPTED:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint must be accepted before work can start.",
            )

        return await self.complaint_repository.start_work(
            complaint
        )

    async def resolve_complaint(
        self,
        complaint_id: int,
        officer_id: int,
    ):
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        if complaint.assigned_officer_id != officer_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        if complaint.status != ComplaintStatus.IN_PROGRESS:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Complaint must be in progress before it can be resolved.",
            )

        return await self.complaint_repository.resolve_complaint(
            complaint
        )

    async def _get_assigned_complaint(
        self,
        complaint_id: int,
        officer_id: int,
    ):
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        if complaint.assigned_officer_id != officer_id:
            raise HTTPException(
                status_code=status.HTTP_403_FORBIDDEN,
                detail="You are not assigned to this complaint.",
            )

        return complaint