from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.repositories.analytics_repository import AnalyticsRepository
from app.schemas.analytics import (
    DashboardSummaryResponse,
    StatusAnalyticsResponse,
    PriorityAnalyticsResponse,
    IssueAnalyticsResponse,
    RepairCostResponse,
)
from app.services.analytics_service import AnalyticsService

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


def get_service(
    db: AsyncSession = Depends(get_db),
):
    repository = AnalyticsRepository(db)
    return AnalyticsService(repository)


@router.get(
    "/dashboard",
    response_model=DashboardSummaryResponse,
)
async def dashboard(
    service: AnalyticsService = Depends(get_service),
):
    return await service.get_dashboard_summary()


@router.get(
    "/status",
    response_model=list[StatusAnalyticsResponse],
)
async def status(
    service: AnalyticsService = Depends(get_service),
):
    return await service.get_status_analytics()


@router.get(
    "/priority",
    response_model=list[PriorityAnalyticsResponse],
)
async def priority(
    service: AnalyticsService = Depends(get_service),
):
    return await service.get_priority_analytics()


@router.get(
    "/issues",
    response_model=list[IssueAnalyticsResponse],
)
async def issues(
    service: AnalyticsService = Depends(get_service),
):
    return await service.get_issue_analytics()


@router.get(
    "/repair-cost",
    response_model=RepairCostResponse,
)
async def repair_cost(
    service: AnalyticsService = Depends(get_service),
):
    return await service.get_total_repair_cost()