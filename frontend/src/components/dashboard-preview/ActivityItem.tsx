import { ReactNode } from "react";

interface ActivityItemProps {
  icon: ReactNode;
  title: string;
  time: string;
}
const ActivityItem = ({
  icon,
  title,
  time,
}: ActivityItemProps) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-gray-200 p-3 hover:bg-gray-50 transition-colors">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
          {icon}
        </div>

        <div>
          <p className="text-sm font-medium text-gray-900">
            {title}
          </p>

          <p className="text-xs text-gray-500">
            {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;