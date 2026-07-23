from app.models.complaint_history import ComplaintHistory
from app.repositories.complaint_history_repository import (
    ComplaintHistoryRepository,
)


class ComplaintHistoryService:

    def __init__(
        self,
        repository: ComplaintHistoryRepository,
    ):
        self.repository = repository

    async def record_history(
        self,
        complaint_id: int,
        performed_by: int,
        action: str,
        old_status: str | None = None,
        new_status: str | None = None,
        remarks: str | None = None,
    ) -> ComplaintHistory:

        history = ComplaintHistory(
            complaint_id=complaint_id,
            performed_by=performed_by,
            action=action,
            old_status=old_status,
            new_status=new_status,
            remarks=remarks,
        )

        return await self.repository.create(history)

    async def get_timeline(
        self,
        complaint_id: int,
    ):
        return await self.repository.get_by_complaint_id(
            complaint_id
        )