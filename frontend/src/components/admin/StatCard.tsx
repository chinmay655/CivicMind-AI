import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  iconColor: string;
  change?: string;
  changeType?: "increase" | "decrease";
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  iconColor,
  change,
  changeType,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white">
            {value}
          </h2>

          {change && (
            <p
              className={`mt-2 text-sm ${
                changeType === "increase"
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {change}
            </p>
          )}
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${iconColor}`}
        >
          <Icon size={28} />
        </div>

      </div>

    </div>
  );
};

export default StatCard;