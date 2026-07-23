from app.repositories.dashboard_repository import DashboardRepository


class DashboardService:

    def __init__(self, repository: DashboardRepository):
        self.repository = repository

    async def get_dashboard_stats(self):
        return await self.repository.get_dashboard_stats()
    
    async def get_recent_complaints(self):
        return await self.repository.get_recent_complaints()
    
    async def get_monthly_complaints(self):
        return await self.repository.get_monthly_complaints()
    
    async def get_hotspots(self):
        return await self.repository.get_hotspots()
    
    async def get_priority_distribution(self):
        return await self.repository.get_priority_distribution()
    
    async def get_status_distribution(self):
        return await self.repository.get_status_distribution()
    
    async def get_map_complaints(self):
        return await self.repository.get_map_complaints()
    
    async def get_performance(self):
        return await self.repository.get_performance()