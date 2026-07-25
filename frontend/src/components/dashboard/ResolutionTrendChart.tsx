import {
  BarChart,
  Bar,
  ResponsiveContainer,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    month: "Jan",
    resolved: 40,
  },
  {
    month: "Feb",
    resolved: 52,
  },
  {
    month: "Mar",
    resolved: 61,
  },
  {
    month: "Apr",
    resolved: 75,
  },
  {
    month: "May",
    resolved: 83,
  },
  {
    month: "Jun",
    resolved: 96,
  },
];

const ResolutionTrendChart = () => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Resolution Trend
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#334155"
            />

            <XAxis
              dataKey="month"
              stroke="#94A3B8"
            />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Bar
              dataKey="resolved"
              radius={[8, 8, 0, 0]}
              fill="#10B981"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default ResolutionTrendChart;