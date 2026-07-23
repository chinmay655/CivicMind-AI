from fastapi import APIRouter, Depends, File, UploadFile
from sqlalchemy.ext.asyncio import AsyncSession

print("✅ complaint_images.py loaded")

from app.db.session import get_db
from app.repositories.complaint_image_repository import ComplaintImageRepository
from app.schemas.complaint_image import ComplaintImageResponse
from app.services.complaint_image_service import ComplaintImageService
from app.storage.storage_service import StorageService
from app.repositories.complaint_repository import ComplaintRepository

router = APIRouter(
    prefix="/complaints",
    tags=["Complaint Images"],
)


@router.post(
    "/{complaint_id}/images",
    response_model=ComplaintImageResponse,
)
async def upload_complaint_image(
    complaint_id: int,
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
):
    storage = StorageService()

    image_path = await storage.save_image(file)

    repository = ComplaintImageRepository(db)

    service = ComplaintImageService(repository)

    return await service.upload_image(
        complaint_id=complaint_id,
        image_url=image_path,
    )
'''@router.get(
    "/{complaint_id}/images")

async def get_complaint_images(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintImageRepository(db)
    service = ComplaintImageService(repository)

    return await service.get_images(complaint_id)'''

@router.get("/{complaint_id}/images", response_model=list[ComplaintImageResponse])
async def get_complaint_images(
    complaint_id: int,
    db: AsyncSession = Depends(get_db),
):
    repository = ComplaintImageRepository(db)
    service = ComplaintImageService(repository)

    return await service.get_images(complaint_id)

@router.delete("/images/{image_id}")
async def delete_image(
    image_id: int,
    db: AsyncSession = Depends(get_db),
):
    image_repository = ComplaintImageRepository(db)
    complaint_repository = ComplaintRepository(db)

    service = ComplaintImageService(
        image_repository,
        complaint_repository,
    )
    
    '''repository = ComplaintImageRepository(db)
    service = ComplaintImageService(repository)

    return await service.delete_image(image_id)'''
