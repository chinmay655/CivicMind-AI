from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.dashboard_repository import DashboardRepository
from app.schemas.dashboard import DashboardStatsResponse
from app.services.dashboard_service import DashboardService
from app.schemas.dashboard import (
    DashboardStatsResponse,
    RecentComplaintResponse,
    MonthlyComplaintResponse,
    PriorityDistributionResponse,
    HotspotResponse,
    StatusDistributionResponse,
    ComplaintMapResponse,
    DashboardPerformanceResponse,
)

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "/stats",
    response_model=DashboardStatsResponse,
)
async def get_dashboard_stats(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_dashboard_stats()

@router.get(
    "/recent",
    response_model=list[RecentComplaintResponse],
)
async def recent_complaints(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_recent_complaints()
@router.get(
    "/monthly",
    response_model=list[MonthlyComplaintResponse],
)
async def monthly_complaints(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_monthly_complaints()

@router.get(
    "/hotspots",
    response_model=list[HotspotResponse],
)
async def get_hotspots(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_hotspots()

@router.get(
    "/priorities",
    response_model=list[PriorityDistributionResponse],
)
async def get_priority_distribution(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_priority_distribution()

@router.get(
    "/status",
    response_model=list[StatusDistributionResponse],
)
async def get_status_distribution(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_status_distribution()

@router.get(
    "/map",
    response_model=list[ComplaintMapResponse],
)
async def get_map_complaints(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_map_complaints()

@router.get(
    "/performance",
    response_model=DashboardPerformanceResponse,
)
async def get_dashboard_performance(
    db: AsyncSession = Depends(get_db),
):
    repository = DashboardRepository(db)
    service = DashboardService(repository)

    return await service.get_performance()