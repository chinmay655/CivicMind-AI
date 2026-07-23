import random


class CostPredictor:

    async def predict(
        self,
        issue_type: str,
        severity: str,
    ) -> int:

        costs = {
            ("Pothole", "Low"): 2000,
            ("Pothole", "Medium"): 5000,
            ("Pothole", "High"): 12000,
            ("Pothole", "Critical"): 25000,

            ("Garbage", "Low"): 1000,
            ("Garbage", "Medium"): 2500,

            ("Street Light", "Medium"): 4000,
            ("Street Light", "High"): 9000,

            ("Water Leakage", "Medium"): 6000,
            ("Water Leakage", "High"): 15000,
            ("Water Leakage", "Critical"): 30000,
        }

        return costs.get(
            (issue_type, severity),
            random.randint(3000, 8000),
        )