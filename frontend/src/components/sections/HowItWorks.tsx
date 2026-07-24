import {
  Camera,
  Brain,
  Building2,
  Wrench,
  Bell,
} from "lucide-react";

const steps = [
  {
    icon: Camera,
    title: "Report Issue",
    description:
      "Citizen uploads an image with the issue location.",
  },
  {
    icon: Brain,
    title: "AI Analysis",
    description:
      "AI detects the problem, predicts severity and repair priority.",
  },
  {
    icon: Building2,
    title: "Department Assignment",
    description:
      "Complaint is automatically assigned to the responsible department.",
  },
  {
    icon: Wrench,
    title: "Repair",
    description:
      "Municipal officers resolve the reported issue.",
  },
  {
    icon: Bell,
    title: "Notification",
    description:
      "Citizen receives real-time updates until completion.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="font-semibold uppercase tracking-[4px] text-blue-600">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            AI Powered Complaint Lifecycle
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            From reporting an issue to resolving it,
            CivicMind AI automates the entire workflow.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                  <Icon className="text-blue-600" size={32} />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;