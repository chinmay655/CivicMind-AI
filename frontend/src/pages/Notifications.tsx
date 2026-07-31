import DashboardLayout from "../layouts/DashboardLayout";
import {
  Bell,
  CheckCircle2,
  Clock3,
  AlertTriangle,
} from "lucide-react";

const notifications = [
  {
    id: 1,
    title: "Complaint Assigned",
    description: "Your complaint has been assigned to the Road Department.",
    time: "2 hours ago",
    icon: Clock3,
    color: "text-blue-400",
  },
  {
    id: 2,
    title: "Repair Work Started",
    description: "Repair work has begun at your complaint location.",
    time: "Yesterday",
    icon: AlertTriangle,
    color: "text-yellow-400",
  },
  {
    id: 3,
    title: "Complaint Resolved",
    description: "Your complaint has been marked as resolved.",
    time: "3 days ago",
    icon: CheckCircle2,
    color: "text-green-400",
  },
];

const Notifications = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Bell className="text-blue-400" size={30} />
          <div>
            <h1 className="text-3xl font-bold text-white">
              Notifications
            </h1>
            <p className="text-slate-400">
              Stay updated with your complaint activities.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {notifications.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-blue-500"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-full bg-slate-800 p-3 ${item.color}`}
                  >
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-slate-400">
                      {item.description}
                    </p>

                    <p className="mt-3 text-sm text-slate-500">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Notifications;