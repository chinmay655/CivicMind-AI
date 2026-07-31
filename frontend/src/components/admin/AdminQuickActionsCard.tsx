import {
  Bell,
  Building2,
  Download,
  Flag,
  Trash2,
  ArrowUpCircle,
} from "lucide-react";

const AdminQuickActionsCard = () => {
  const actions = [
    {
      title: "Assign Department",
      icon: Building2,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Notify Citizen",
      icon: Bell,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Download Report",
      icon: Download,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Escalate",
      icon: ArrowUpCircle,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
    {
      title: "Mark Critical",
      icon: Flag,
      color: "text-red-600",
      bg: "bg-red-100",
    },
    {
      title: "Delete Complaint",
      icon: Trash2,
      color: "text-red-700",
      bg: "bg-red-200",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center rounded-xl border border-slate-200 p-5 transition hover:shadow-md hover:border-blue-500"
            >
              <div className={`rounded-xl p-3 ${action.bg}`}>
                <Icon
                  size={24}
                  className={action.color}
                />
              </div>

              <span className="mt-3 text-sm font-medium text-center">
                {action.title}
              </span>
            </button>
          );
        })}

      </div>
    </div>
  );
};

export default AdminQuickActionsCard;