from pathlib import Path

from ultralytics import YOLO

from app.ai.detectors.base_detector import BaseDetector


class YOLODetector(BaseDetector):

    def __init__(self):
        base_dir = Path(__file__).resolve().parents[3]
        model_path = base_dir / "ai_models" / "trained_models" / "best.pt"

        self.model = YOLO(str(model_path))

    async def detect(self, image_path: str):

        try:
            results = self.model.predict(
                source=image_path,
                verbose=False
            )

            if not results or len(results[0].boxes) == 0:
                return {
                    "issue_type": "No Issue Detected",
                    "confidence": 0.0,
                    "bbox": None,
                }

            result = results[0]

            best_box = max(result.boxes, key=lambda box: float(box.conf))

            class_id = int(best_box.cls[0])
            confidence = float(best_box.conf[0]) * 100

            return {
                "issue_type": self.model.names[class_id],
                "confidence": round(confidence, 2),
                "bbox": best_box.xyxy[0].tolist(),
            }

        except Exception as e:
            raise RuntimeError(f"YOLO detection failed: {e}")