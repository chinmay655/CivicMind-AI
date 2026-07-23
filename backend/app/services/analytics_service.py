from app.repositories.analytics_repository import AnalyticsRepository


class AnalyticsService:

    def __init__(self, repository: AnalyticsRepository):
        self.repository = repository

    async def get_dashboard_summary(self):
        total = await self.repository.total_complaints()
        status_data = await self.repository.complaints_by_status()

        summary = {
            "total_complaints": total,
            "pending": 0,
            "assigned": 0,
            "accepted": 0,
            "in_progress": 0,
            "resolved": 0,
            "rejected": 0,
        }

        for status, count in status_data:
            status_name = status.value.lower().replace(" ", "_")
            if status_name in summary:
                summary[status_name] = count

        return summary

    async def get_status_analytics(self):
        data = await self.repository.complaints_by_status()

        return [
            {
                "status": status.value,
                "count": count,
            }
            for status, count in data
        ]

    async def get_priority_analytics(self):
        data = await self.repository.complaints_by_priority()

        return [
            {
                "priority": priority.value,
                "count": count,
            }
            for priority, count in data
        ]

    async def get_issue_analytics(self):
        data = await self.repository.complaints_by_ai_issue()

        return [
            {
                "issue": issue if issue else "Unknown",
                "count": count,
            }
            for issue, count in data
        ]

    async def get_total_repair_cost(self):
        total = await self.repository.total_estimated_cost()

        return {
            "total_estimated_cost": total
        }
    
    