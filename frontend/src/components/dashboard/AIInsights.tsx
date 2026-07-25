import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

const insights = [
  {
    icon: AlertTriangle,
    title: "High Priority Alert",
    description:
      "3 road damage reports in Ward 12 require immediate attention.",
    color: "text-red-400",
  },
  {
    icon: TrendingUp,
    title: "Complaint Trend",
    description:
      "Pothole complaints increased by 18% compared to last week.",
    color: "text-blue-400",
  },
  {
    icon: BrainCircuit,
    title: "AI Recommendation",
    description:
      "Schedule repair work for MG Road within the next 24 hours.",
    color: "text-green-400",
  },
];

const AIInsights = () => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6 flex items-center gap-3">
        <Sparkles className="text-blue-400" size={28} />

        <h2 className="text-2xl font-semibold text-white">
          AI Insights
        </h2>
      </div>

      <div className="space-y-5">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950 p-5 transition hover:border-blue-500"
            >
              <div className={`mt-1 ${item.color}`}>
                <Icon size={24} />
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AIInsights;