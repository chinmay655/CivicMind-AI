class DepartmentPredictor:

    async def predict(
        self,
        issue_type: str,
    ) -> str:

        mapping = {
            "Pothole": "Road Department",
            "Garbage": "Sanitation Department",
            "Street Light": "Electrical Department",
            "Water Leakage": "Water Department",
        }

        return mapping.get(
            issue_type,
            "General Department",
        )