import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const data = [
  { month: "Jan", resolved: 40 },
  { month: "Feb", resolved: 52 },
  { month: "Mar", resolved: 61 },
  { month: "Apr", resolved: 75 },
  { month: "May", resolved: 83 },
  { month: "Jun", resolved: 96 },
];

const ResolutionTrendChart = () => {
  return (
    <Card>

      <SectionHeader
        title="Resolution Trend"
        subtitle="Monthly resolved complaints"
        action={
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            ↑ 24% this quarter
          </span>
        }
      />

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{
                fill: "#64748B",
                fontSize: 13,
              }}
            />

            <Tooltip
              cursor={{
                fill: "#F8FAFC",
              }}
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                background: "#FFFFFF",
                boxShadow:
                  "0 12px 30px rgba(15,23,42,0.08)",
              }}
            />

            <Bar
              dataKey="resolved"
              fill="#10B981"
              radius={[12, 12, 0, 0]}
              maxBarSize={42}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
};

export default ResolutionTrendChart;