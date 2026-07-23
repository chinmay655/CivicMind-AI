import os

from fastapi import HTTPException

from app.ai.services.ai_analysis_service import AIAnalysisService
from app.repositories.complaint_image_repository import ComplaintImageRepository
from app.repositories.complaint_repository import ComplaintRepository
from app.services.auto_assignment_service import AutoAssignmentService
from app.models.complaint import ComplaintStatus

class ComplaintImageService:
    def __init__(
        self,
        image_repository: ComplaintImageRepository,
        complaint_repository: ComplaintRepository,
    ):
        self.image_repository = image_repository
        self.complaint_repository = complaint_repository
        self.ai_service = AIAnalysisService()

    async def upload_image(
        self,
        complaint_id: int,
        image_url: str,
    ):
    # Save image record
        image = await self.image_repository.create_image(
            complaint_id,
            image_url,
        )

    # Get complaint
        complaint = await self.complaint_repository.get_by_id(
            complaint_id
        )

        if complaint is None:
            raise HTTPException(
                status_code=404,
                detail="Complaint not found",
            )

    # Run AI
        analysis = await self.ai_service.analyze_image(image_url)

    # Update AI fields
        complaint.ai_detected_issue = analysis["issue_type"]
        complaint.ai_confidence = analysis["confidence"]
        complaint.priority = analysis["severity"]
        complaint.ai_estimated_cost = analysis["estimated_cost"]
        complaint.ai_recommended_department = analysis["recommended_department"]
        complaint.ai_analysis_status = "Completed"

    # Auto assign officer
        auto_assign_service = AutoAssignmentService(
            self.complaint_repository.db
        )

        await auto_assign_service.assign_officer(
            complaint,
            analysis["recommended_department"],
        )
        if officer:
            complaint.status = ComplaintStatus.ASSIGNED
        else:
            complaint.status = ComplaintStatus.PENDING
    # Single Commit
        await self.complaint_repository.db.commit()
        await self.complaint_repository.db.refresh(complaint)

        return image

    async def get_images(self, complaint_id: int):
        return await self.image_repository.get_images_by_complaint(
            complaint_id
        )

    async def delete_image(self, image_id: int):
        image = await self.image_repository.get_by_id(image_id)

        if not image:
            raise HTTPException(
                status_code=404,
                detail="Image not found",
            )

        if os.path.exists(image.image_url):
            os.remove(image.image_url)

        await self.image_repository.delete(image)

        return {"message": "Image deleted successfully"}