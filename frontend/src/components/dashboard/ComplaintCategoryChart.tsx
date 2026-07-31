import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

import Card from "../ui/Card";
import SectionHeader from "../ui/SectionHeader";

const data = [
  { name: "Road Damage", value: 38 },
  { name: "Garbage", value: 22 },
  { name: "Street Light", value: 18 },
  { name: "Water Leakage", value: 14 },
  { name: "Others", value: 8 },
];

const COLORS = [
  "#2563EB",
  "#10B981",
  "#F59E0B",
  "#EF4444",
  "#8B5CF6",
];

const total = data.reduce((sum, item) => sum + item.value, 0);

const ComplaintCategoryChart = () => {
  return (
    <Card>

      <SectionHeader
        title="Complaint Categories"
        subtitle="Distribution of reported civic issues"
      />

      <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">

        <div className="h-80">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                innerRadius={75}
                outerRadius={105}
                paddingAngle={4}
                cornerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  borderRadius: "16px",
                  border: "1px solid #E2E8F0",
                  background: "#fff",
                  boxShadow:
                    "0 10px 30px rgba(15,23,42,0.08)",
                }}
              />

            </PieChart>

          </ResponsiveContainer>

        </div>

        <div className="space-y-4">

          <div className="rounded-2xl bg-slate-50 p-5 text-center">

            <p className="text-sm text-slate-500">
              Total Complaints
            </p>

            <h3 className="mt-2 text-4xl font-bold text-slate-900">
              {total}
            </h3>

          </div>

          {data.map((item, index) => (

            <div
              key={item.name}
              className="flex items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:shadow-md"
            >

              <div className="flex items-center gap-3">

                <div
                  className="h-4 w-4 rounded-full"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="font-medium text-slate-700">
                  {item.name}
                </span>

              </div>

              <div className="text-right">

                <p className="font-semibold text-slate-900">
                  {item.value}
                </p>

                <p className="text-sm text-slate-500">
                  {((item.value / total) * 100).toFixed(0)}%
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Card>
  );
};

export default ComplaintCategoryChart;