from pydantic import BaseModel
from pydantic import BaseModel, Field

class ComplaintAssignmentRequest(BaseModel):
    department_id: int
    officer_id: int


class ComplaintAssignmentResponse(BaseModel):
    message: str

class ComplaintAssignment(BaseModel):
    officer_id: int = Field(..., gt=0)