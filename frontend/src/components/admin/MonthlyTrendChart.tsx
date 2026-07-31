import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", complaints: 120 },
  { month: "Feb", complaints: 95 },
  { month: "Mar", complaints: 150 },
  { month: "Apr", complaints: 180 },
  { month: "May", complaints: 160 },
  { month: "Jun", complaints: 210 },
  { month: "Jul", complaints: 240 },
];

const MonthlyTrendChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Monthly Complaint Trend
        </h2>

        <p className="text-sm text-slate-500">
          Number of complaints received each month.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="4 4" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="complaints"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyTrendChart;