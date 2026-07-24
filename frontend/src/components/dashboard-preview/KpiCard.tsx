interface KpiCardProps {
  title: string;
  value: string | number;
  trend: string;
  icon: React.ReactNode;
  trendType?: "increase" | "decrease" | "neutral";
}
const KpiCard = ({
  title,
  value,
  trend,
  icon,
  trendType = "neutral",
}: KpiCardProps) => {
  return (
        <div className="bg-white rounded-2xl border border-gray-200 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        {/* Top Row */}
            <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {icon}
                </div>

                <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                        trendType === "increase"
                            ? "bg-green-100 text-green-700"
                            : trendType === "decrease"
                            ? "bg-red-100 text-red-700"
                            : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {trend}
                </span>
            </div>

  {/* Value */}
            <h3 className="mt-5 text-3xl font-bold text-gray-900">
                {value}
            </h3>

  {/* Title */}
            <p className="mt-1 text-sm text-gray-500">
                {title}
            </p>
            </div>
        );
    };

    export default KpiCard;