import {
  Brain,
  MapPinned,
  Gauge,
  Wallet,
} from "lucide-react";

import CapabilityCard from "./CapabilityCard";

const capabilities = [
  {
    icon: Brain,
    title: "YOLO Detection",
    description:
      "Detect potholes, garbage, cracks, water leakage and damaged infrastructure from uploaded images.",
  },
  {
    icon: MapPinned,
    title: "GPS Intelligence",
    description:
      "Automatically associate complaints with accurate location data for faster municipal response.",
  },
  {
    icon: Gauge,
    title: "Severity Prediction",
    description:
      "Predict urgency levels using AI so authorities can prioritize the most critical issues.",
  },
  {
    icon: Wallet,
    title: "Repair Cost Estimation",
    description:
      "Estimate repair costs and required resources using historical complaint patterns.",
  },
];

function AICapabilities() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            AI That Understands Your City
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            CivicMind AI combines computer vision, predictive analytics,
            and geospatial intelligence to transform citizen reports into
            actionable insights.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => (
            <CapabilityCard
              key={item.title}
              icon={<item.icon size={30} />}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default AICapabilities;