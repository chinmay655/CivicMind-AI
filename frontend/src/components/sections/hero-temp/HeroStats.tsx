const stats = [
  {
    value: "25K+",
    label: "Complaints Reported",
  },
  {
    value: "96%",
    label: "AI Detection Accuracy",
  },
  {
    value: "120+",
    label: "Municipal Wards",
  },
];

function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-3 gap-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
        >
          <h3 className="text-3xl font-bold text-slate-900">
            {stat.value}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}

export default HeroStats;