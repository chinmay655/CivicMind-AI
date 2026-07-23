from fastapi import HTTPException, status

from app.models.complaint import ComplaintStatus
from app.repositories.assignment_repository import AssignmentRepository
from app.schemas.assignment import (
    ComplaintAssignmentRequest,
    ComplaintAssignmentResponse,
)


class AssignmentService:
    def __init__(self, repository: AssignmentRepository):
        self.repository = repository

    async def assign_complaint(
        self,
        complaint_id: int,
        request: ComplaintAssignmentRequest,
    ) -> ComplaintAssignmentResponse:

        # Get Complaint
        complaint = await self.repository.get_complaint(complaint_id)

        if complaint is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Complaint not found",
            )

        # Get Department
        department = await self.repository.get_department(
            request.department_id
        )

        if department is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Department not found",
            )

        # Get Officer
        officer = await self.repository.get_officer(
            request.officer_id
        )

        if officer is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Officer not found",
            )

        # Validate Officer belongs to Department
        valid_officer = await self.repository.officer_belongs_to_department(
            request.officer_id,
            request.department_id,
        )

        if valid_officer is None:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Officer does not belong to the selected department.",
            )

        # Update Complaint Status
        complaint.status = ComplaintStatus.ASSIGNED

        # Assign Complaint
        await self.repository.assign(
            complaint,
            request.department_id,
            request.officer_id,
        )

        return ComplaintAssignmentResponse(
            message="Complaint assigned successfully."
        )