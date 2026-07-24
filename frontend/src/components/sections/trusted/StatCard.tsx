interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-4xl font-bold text-blue-600">
        {value}
      </h3>

      <p className="mt-2 text-sm font-medium text-slate-600">
        {label}
      </p>
    </div>
  );
};

export default StatCard;