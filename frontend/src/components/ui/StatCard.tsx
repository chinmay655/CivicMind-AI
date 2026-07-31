import { LucideIcon } from "lucide-react";
import Card from "./Card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color: string;
  change?: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  change,
}: StatCardProps) => {
  return (
    <Card>

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>

          {change && (
            <p className="mt-2 text-sm text-green-600">
              {change}
            </p>
          )}

        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${color}`}
        >
          <Icon className="h-7 w-7 text-white" />
        </div>

      </div>

    </Card>
  );
};

export default StatCard;