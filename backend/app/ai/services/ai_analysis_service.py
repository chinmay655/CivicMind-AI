from app.ai.detectors.yolo_detector import YOLODetector
from app.ai.predictors.cost_predictor import CostPredictor
from app.ai.predictors.department_predictor import DepartmentPredictor
from app.ai.predictors.severity_predictor import SeverityPredictor


class AIAnalysisService:

    def __init__(self):
        self.detector = YOLODetector()
        self.severity_predictor = SeverityPredictor()
        self.cost_predictor = CostPredictor()
        self.department_predictor = DepartmentPredictor()

    async def analyze_image(self, image_path: str):

        detection = await self.detector.detect(image_path)

        severity = await self.severity_predictor.predict(
            detection["issue_type"]
        )

        estimated_cost = await self.cost_predictor.predict(
            detection["issue_type"],
            severity,
        )

        department = await self.department_predictor.predict(
            detection["issue_type"]
        )

        return {
            "issue_type": detection["issue_type"],
            "confidence": detection["confidence"],
            "severity": severity,
            "estimated_cost": estimated_cost,
            "recommended_department": department,
        }