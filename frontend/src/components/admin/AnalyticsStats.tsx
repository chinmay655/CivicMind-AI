import {
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
} from "lucide-react";

const stats = [
  {
    title: "Total Complaints",
    value: "1,248",
    icon: FileText,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Resolved",
    value: "986",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Pending",
    value: "196",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Critical",
    value: "66",
    icon: AlertTriangle,
    color: "bg-red-100 text-red-600",
  },
];

const AnalyticsStats = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {item.value}
                </h2>
              </div>

              <div className={`rounded-xl p-3 ${item.color}`}>
                <Icon size={24} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AnalyticsStats;