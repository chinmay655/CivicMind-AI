import {
  Brain,
  MapPinned,
  ShieldCheck,
  BarChart3,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    title: "AI Image Detection",
    description:
      "Automatically detect potholes, garbage, road cracks, and other civic issues using AI-powered image analysis.",
    icon: Brain,
  },
  {
    title: "Live GPS Tracking",
    description:
      "Capture the exact issue location with GPS, helping municipalities respond more efficiently.",
    icon: MapPinned,
  },
  {
    title: "Smart Prioritization",
    description:
      "AI evaluates severity and urgency to prioritize complaints for faster resolution.",
    icon: ShieldCheck,
  },
  {
    title: "Real-Time Analytics",
    description:
      "Monitor complaint trends, response times, and city-wide infrastructure insights through interactive dashboards.",
    icon: BarChart3,
  },
];

function Features() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            THIS IS THE NEW FEATURES SECTION
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            A complete AI-powered platform that helps citizens report civic issues
            while enabling municipalities to make faster and smarter decisions.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={<feature.icon size={28} />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;