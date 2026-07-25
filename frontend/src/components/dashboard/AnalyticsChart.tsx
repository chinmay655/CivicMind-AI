import {
  AreaChart,
  Area,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-2xl font-semibold text-white">
        Weekly Reports
      </h2>

      <div style={{ width: "100%", height: 320 }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="reports" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.05} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="day" stroke="#94A3B8" />

            <YAxis stroke="#94A3B8" />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="reports"
              stroke="#3B82F6"
              fillOpacity={1}
              fill="url(#reports)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default AnalyticsChart;