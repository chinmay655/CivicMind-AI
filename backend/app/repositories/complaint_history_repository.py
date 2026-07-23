'''from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint_history import ComplaintHistory


class ComplaintHistoryRepository:

    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(
        self,
        history: ComplaintHistory,
    ) -> ComplaintHistory:

        self.db.add(history)
        await self.db.commit()
        await self.db.refresh(history)

        return history

    async def get_by_complaint_id(
        self,
        complaint_id: int,
    ) -> list[ComplaintHistory]:

        result = await self.db.execute(
            select(ComplaintHistory)
            .where(
                ComplaintHistory.complaint_id == complaint_id
            )
            .order_by(
                ComplaintHistory.created_at.asc()
            )
        )

        return result.scalars().all()'''

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.complaint_history import ComplaintHistory


class ComplaintHistoryRepository:
    def __init__(self, db: AsyncSession):
        self.db = db

    async def create(
        self,
        complaint_id: int,
        performed_by: int,
        action: str,
        old_status: str | None = None,
        new_status: str | None = None,
        remarks: str | None = None,
    ):
        history = ComplaintHistory(
            complaint_id=complaint_id,
            performed_by=performed_by,
            action=action,
            old_status=old_status,
            new_status=new_status,
            remarks=remarks,
        )

        self.db.add(history)
        await self.db.commit()
        await self.db.refresh(history)

        return history

    async def get_by_complaint(
        self,
        complaint_id: int,
    ):
        result = await self.db.execute(
            select(ComplaintHistory)
            .where(
                ComplaintHistory.complaint_id == complaint_id
            )
            .order_by(ComplaintHistory.created_at)
        )

        return result.scalars().all()