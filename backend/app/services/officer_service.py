from fastapi import HTTPException, status

from app.core.security import hash_password
from app.models.user import User
from app.repositories.department_repository import DepartmentRepository
from app.repositories.officer_repository import OfficerRepository
from app.schemas.officer import OfficerCreate, OfficerResponse
from app.schemas.officer import OfficerDashboardResponse

class OfficerService:

    def __init__(
        self,
        repository: OfficerRepository,
        department_repository: DepartmentRepository,
    ):
        self.repository = repository
        self.department_repository = department_repository

    async def create_officer(
        self,
        request: OfficerCreate,
    ):
        existing = await self.repository.get_by_email(
            request.email
        )

        if existing:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Officer already exists.",
            )

        department = await self.department_repository.get_by_id(
            request.department_id
        )

        if not department:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Department not found.",
            )

        officer = User(
            full_name=request.full_name,
            email=request.email,
            hashed_password=hash_password(
                request.password
            ),
            department_id=request.department_id,
            role_id=2,      # Officer Role
            is_active=True,
        )

        officer = await self.repository.create(officer)

        return OfficerResponse.model_validate(officer)

    async def get_officers(self):
        officers = await self.repository.get_all()

        return [
            OfficerResponse.model_validate(officer)
            for officer in officers
            if officer.role_id == 2
        ]

    async def get_officer(
        self,
        officer_id: int,
    ):
        officer = await self.repository.get_by_id(
            officer_id
        )

        if (
            officer is None
            or officer.role_id != 2
        ):
            raise HTTPException(
                status_code=404,
                detail="Officer not found.",
            )

        return OfficerResponse.model_validate(officer)

    async def get_dashboard_stats(
        self,
        officer_id: int,
    ):
        total = await self.repository.get_total_assigned(
            officer_id
        )

        pending = await self.repository.get_pending_complaints(
            officer_id
        )

        accepted = await self.repository.get_accepted_complaints(
            officer_id
        )

        in_progress = await self.repository.get_in_progress_complaints(
            officer_id
        )

        resolved = await self.repository.get_resolved_complaints(
            officer_id
        )

        return OfficerDashboardResponse(
            total_assigned=total,
            pending=pending,
            accepted=accepted,
            in_progress=in_progress,
            resolved=resolved,
        )