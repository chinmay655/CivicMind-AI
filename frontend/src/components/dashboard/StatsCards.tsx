import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  Wrench,
} from "lucide-react";

const stats = [
  {
    title: "Total Reports",
    value: 18,
    icon: ClipboardList,
    color: "text-blue-400",
  },
  {
    title: "Pending",
    value: 5,
    icon: Clock3,
    color: "text-yellow-400",
  },
  {
    title: "Resolved",
    value: 10,
    icon: CheckCircle2,
    color: "text-green-400",
  },
  {
    title: "In Progress",
    value: 3,
    icon: Wrench,
    color: "text-orange-400",
  },
];

const StatsCards = () => {
  return (
    <section className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-500"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-white">
                  {item.value}
                </h2>
              </div>

              <div
                className={`rounded-xl bg-slate-800 p-3 ${item.color}`}
              >
                <Icon size={26} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default StatsCards;