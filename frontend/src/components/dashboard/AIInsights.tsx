import {
  BrainCircuit,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ChevronRight,
} from "lucide-react";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const insights = [
  {
    icon: AlertTriangle,
    title: "High Priority Alert",
    description:
      "3 road damage reports in Ward 12 require immediate attention.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: TrendingUp,
    title: "Complaint Trend",
    description:
      "Pothole complaints increased by 18% compared to last week.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: BrainCircuit,
    title: "AI Recommendation",
    description:
      "Schedule repair work for MG Road within the next 24 hours.",
    color: "bg-green-100 text-green-600",
  },
];

const AIInsights = () => {
  return (
    <Card>

      <SectionHeader
        title="AI Insights"
        subtitle="Generated from recent complaint patterns"
        action={
          <div className="flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            AI Online
          </div>
        }
      />

      <div className="space-y-5">

        {insights.map((item) => {

          const Icon = item.icon;

          return (

            <div
              key={item.title}
              className="
                group
                flex
                items-start
                justify-between
                gap-4
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                p-5
                transition-all
                duration-300
                hover:border-blue-300
                hover:bg-white
                hover:shadow-md
              "
            >

              <div className="flex gap-4">

                <div
                  className={`
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-2xl
                    ${item.color}
                  `}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <div>

                  <h3 className="font-semibold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                </div>

              </div>

              <ChevronRight
                className="
                  mt-1
                  h-5
                  w-5
                  text-slate-400
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </div>

          );

        })}

      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 p-5 text-white">

        <div className="flex items-center gap-3">

          <Sparkles className="h-6 w-6" />

          <h3 className="text-lg font-semibold">
            AI Confidence Score
          </h3>

        </div>

        <div className="mt-5 flex items-end justify-between">

          <div>

            <p className="text-5xl font-bold">
              96%
            </p>

            <p className="mt-2 text-blue-100">
              Prediction accuracy
            </p>

          </div>

          <div className="text-right text-sm text-blue-100">

            Based on
            <br />
            historical complaint
            <br />
            patterns

          </div>

        </div>

      </div>

    </Card>
  );
};

export default AIInsights;