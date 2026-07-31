import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    priority: "Low",
    complaints: 180,
  },
  {
    priority: "Medium",
    complaints: 340,
  },
  {
    priority: "High",
    complaints: 220,
  },
  {
    priority: "Critical",
    complaints: 85,
  },
];

const PriorityDistributionChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Priority Distribution
        </h2>

        <p className="text-sm text-slate-500">
          Complaint count based on priority level.
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={350}
      >
        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="priority" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="complaints"
            radius={[8, 8, 0, 0]}
            fill="#2563eb"
          />

        </BarChart>
      </ResponsiveContainer>

    </div>
  );
};

export default PriorityDistributionChart;