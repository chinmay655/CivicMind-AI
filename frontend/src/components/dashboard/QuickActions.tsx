import {
  PlusCircle,
  MapPinned,
  FileClock,
  Bell,
} from "lucide-react";

const actions = [
  {
    title: "Report Issue",
    description: "Report a new civic issue",
    icon: PlusCircle,
  },
  {
    title: "City Map",
    description: "View nearby reports",
    icon: MapPinned,
  },
  {
    title: "My Complaints",
    description: "Track your submitted issues",
    icon: FileClock,
  },
  {
    title: "Notifications",
    description: "View recent updates",
    icon: Bell,
  },
];

const QuickActions = () => {
  return (
    <section>
      <h2 className="mb-5 text-2xl font-semibold text-white">
        Quick Actions
      </h2>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-slate-800"
            >
              <div className="mb-4 inline-flex rounded-xl bg-blue-500/10 p-3 text-blue-400">
                <Icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-white">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-slate-400">
                {action.description}
              </p>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;