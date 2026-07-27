import random


class SeverityPredictor:

    async def predict(
        self,
        issue_type: str,
    ) -> str:

        severity_map = {
            "Pothole": [
                "MEDIUM",
                "HIGH",
                "CRITICAL",
            ],
            "Garbage": [
                "LOW",
                "MEDIUM",
            ],
            "Street Light": [
                "MEDIUM",
                "HIGH",
            ],
            "Water Leakage": [
                "MEDIUM",
                "HIGH",
                "CRITICAL",
            ],
        }

        return random.choice(
            severity_map.get(
                issue_type,
                ["MEDIUM"],
            )
        )