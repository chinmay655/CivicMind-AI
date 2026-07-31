import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const data = [
  { day: "Mon", reports: 12 },
  { day: "Tue", reports: 18 },
  { day: "Wed", reports: 10 },
  { day: "Thu", reports: 22 },
  { day: "Fri", reports: 30 },
  { day: "Sat", reports: 25 },
  { day: "Sun", reports: 16 },
];

const AnalyticsChart = () => {
  return (
    <Card>

      <SectionHeader
        title="Weekly Reports"
        subtitle="Reports submitted over the last 7 days"
        action={
          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            ↑ 18% this week
          </span>
        }
      />

      <div className="h-80">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >

            <defs>

              <linearGradient
                id="reportsGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="5%"
                  stopColor="#2563EB"
                  stopOpacity={0.35}
                />

                <stop
                  offset="95%"
                  stopColor="#2563EB"
                  stopOpacity={0}
                />
              </linearGradient>

            </defs>

            <CartesianGrid
              stroke="#E2E8F0"
              strokeDasharray="4 4"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 13 }}
            />

            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748B", fontSize: 13 }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "16px",
                border: "1px solid #E2E8F0",
                background: "#FFFFFF",
                boxShadow:
                  "0 10px 30px rgba(15,23,42,0.08)",
              }}
            />

            <Area
              type="monotone"
              dataKey="reports"
              stroke="#2563EB"
              strokeWidth={3}
              fill="url(#reportsGradient)"
              activeDot={{
                r: 6,
              }}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

    </Card>
  );
};

export default AnalyticsChart;