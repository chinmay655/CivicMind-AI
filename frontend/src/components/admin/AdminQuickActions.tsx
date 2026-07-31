import {
  Plus,
  Users,
  Building2,
  BarChart3,
} from "lucide-react";

const actions = [
  {
    title: "New Complaint",
    icon: Plus,
  },
  {
    title: "Manage Officers",
    icon: Users,
  },
  {
    title: "Departments",
    icon: Building2,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
];

const AdminQuickActions = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="flex flex-col items-center justify-center gap-3 rounded-xl border border-slate-800 bg-slate-950/40 p-5 transition hover:border-blue-500 hover:bg-slate-800"
            >
              <Icon
                size={24}
                className="text-blue-400"
              />

              <span className="text-sm text-slate-300">
                {action.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default AdminQuickActions;