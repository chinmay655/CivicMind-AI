import {
  Camera,
  Brain,
  BarChart3,
  Building2,
} from "lucide-react";
import WorkflowCard from "./WorkflowCard";

const workflow = [
  {
    icon: Camera,
    title: "Upload Issue",
    description:
      "Citizens capture a photo of potholes, garbage, water leakage, or damaged infrastructure.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "Our AI identifies the issue type and extracts valuable information from the uploaded image.",
  },
  {
    icon: BarChart3,
    title: "Smart Prioritization",
    description:
      "The system predicts severity, repair cost, and urgency to prioritize complaints intelligently.",
  },
  {
    icon: Building2,
    title: "Municipality Action",
    description:
      "The complaint is automatically assigned to the appropriate department for quick resolution.",
  },
];

function Workflow() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-slate-900">
            How CivicMind AI Works
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
            From reporting an issue to assigning it to the correct department,
            CivicMind AI automates the complete complaint lifecycle.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {workflow.map((step) => (
            <WorkflowCard
              key={step.title}
              icon={<step.icon size={30} />}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Workflow;