import random


class SeverityPredictor:

    async def predict(
        self,
        issue_type: str,
    ) -> str:

        severity_map = {
            "Pothole": [
                "Medium",
                "High",
                "Critical",
            ],
            "Garbage": [
                "Low",
                "Medium",
            ],
            "Street Light": [
                "Medium",
                "High",
            ],
            "Water Leakage": [
                "Medium",
                "High",
                "Critical",
            ],
        }

        return random.choice(
            severity_map.get(
                issue_type,
                ["Medium"],
            )
        )