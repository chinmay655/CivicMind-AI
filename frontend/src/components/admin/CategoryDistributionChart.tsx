import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  {
    name: "Road Issues",
    value: 320,
  },
  {
    name: "Garbage",
    value: 210,
  },
  {
    name: "Water Supply",
    value: 170,
  },
  {
    name: "Street Lights",
    value: 140,
  },
  {
    name: "Traffic",
    value: 95,
  },
  {
    name: "Parks",
    value: 65,
  },
];

const COLORS = [
  "#2563eb",
  "#16a34a",
  "#f59e0b",
  "#dc2626",
  "#9333ea",
  "#0891b2",
];

const CategoryDistributionChart = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6">
        <h2 className="text-xl font-semibold">
          Complaint Categories
        </h2>

        <p className="text-sm text-slate-500">
          Distribution of complaints by category.
        </p>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={120}
            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default CategoryDistributionChart;