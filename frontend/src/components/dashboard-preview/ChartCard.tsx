import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const ChartCard = () => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900">
                Complaint Trends
            </h3>

            <span className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">
                Last 30 Days
            </span>
        </div>

<div className="mt-6 h-64">
  <ResponsiveContainer width="100%" height="100%">
    <LineChart data={complaintData}>
      <CartesianGrid strokeDasharray="3 3" />

      <XAxis dataKey="month" />

      <YAxis />

      <Tooltip />

      <Line
        type="monotone"
        dataKey="complaints"
        stroke="#2563EB"
        strokeWidth={3}
        dot={{ r: 5 }}
      />
    </LineChart>
  </ResponsiveContainer>
</div>
    </div>
  );
};

const complaintData = [
  { month: "Jan", complaints: 120 },
  { month: "Feb", complaints: 180 },
  { month: "Mar", complaints: 160 },
  { month: "Apr", complaints: 250 },
  { month: "May", complaints: 300 },
  { month: "Jun", complaints: 280 },
];

export default ChartCard;