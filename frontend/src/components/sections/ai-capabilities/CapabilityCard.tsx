interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function CapabilityCard({
  icon,
  title,
  description,
}: CapabilityCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default CapabilityCard;