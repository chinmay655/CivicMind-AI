import {
  CheckCircle2,
  Clock3,
  UserCheck,
} from "lucide-react";

interface Activity {
  id: number;
  title: string;
  description: string;
  time: string;
}

interface ActivityFeedProps {
  activities?: Activity[];
}

const ActivityFeed = ({
  activities = [],
}: ActivityFeedProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Activity Feed
      </h2>

      {activities.length === 0 ? (
        <p className="text-slate-500">
          No activity available yet.
        </p>
      ) : (
        <div className="space-y-6">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="flex gap-4"
            >
              <div className="mt-1">
                <CheckCircle2
                  size={20}
                  className="text-blue-400"
                />
              </div>

              <div className="flex-1">
                <h3 className="font-medium text-white">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {activity.description}
                </p>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Clock3 size={14} />
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityFeed;