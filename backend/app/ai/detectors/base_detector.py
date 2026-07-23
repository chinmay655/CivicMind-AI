from abc import ABC, abstractmethod


class BaseDetector(ABC):

    @abstractmethod
    async def detect(self, image_path: str):
        """
        Detect objects from an image.
        Must return a dictionary containing AI results.
        """
        pass