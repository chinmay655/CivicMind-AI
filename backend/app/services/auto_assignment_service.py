from sqlalchemy import select
from datetime import datetime
from app.models.department import Department
from app.models.user import User
from app.models.role import Role


class AutoAssignmentService:

    def __init__(self, db):
        self.db = db

    async def assign_officer(self, complaint, department_name: str):

        department_result = await self.db.execute(
            select(Department).where(
                Department.name == department_name
            )
        )

        department = department_result.scalar_one_or_none()

        if department is None:
            return None

        officer_result = await self.db.execute(
            select(User)
            .join(Role)
            .where(
                User.department_id == department.id,
                Role.name == "Officer",
                User.is_active == True,
            )
            .limit(1)
        )

        officer = officer_result.scalar_one_or_none()

        if officer is None:
            return None

        complaint.assigned_department_id = department.id
        complaint.assigned_officer_id = officer.id
        complaint.assigned_at = datetime.utcnow()

        #await self.db.commit()
        #await self.db.refresh(complaint)

        return officer