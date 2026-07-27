from app.models.complaint import Complaint
from app.models.department import Department
from app.models.permission import Permission
from app.models.role import Role
from app.models.user import User
from .complaint_image import ComplaintImage
from .complaint_history import ComplaintHistory
__all__ = [
    "Complaint",
    "Department",
    "Permission",
    "Role",
    "User",
    "ComplaintImage",
    "ComplaintHistory",
]