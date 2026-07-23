from pydantic import BaseModel


class ComplaintStatusUpdate(BaseModel):
    remarks: str | None = None


class ComplaintWorkflowResponse(BaseModel):
    id: int
    title: str
    description: str
    status: str

    class Config:
        from_attributes = True