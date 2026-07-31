import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", complaints: 120 },
  { month: "Feb", complaints: 180 },
  { month: "Mar", complaints: 240 },
  { month: "Apr", complaints: 210 },
  { month: "May", complaints: 320 },
  { month: "Jun", complaints: 290 },
];

const ComplaintsTrendChart = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Complaint Trends
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Monthly complaints received
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="complaints"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ComplaintsTrendChart;