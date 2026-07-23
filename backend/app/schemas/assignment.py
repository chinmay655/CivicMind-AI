from pydantic import BaseModel


class ComplaintAssignmentRequest(BaseModel):
    department_id: int
    officer_id: int


class ComplaintAssignmentResponse(BaseModel):
    message: str