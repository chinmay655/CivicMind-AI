from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ComplaintHistoryResponse(BaseModel):
    id: int
    complaint_id: int
    performed_by: int
    action: str
    old_status: str | None
    new_status: str | None
    remarks: str | None
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)