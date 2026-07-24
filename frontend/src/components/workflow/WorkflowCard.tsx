interface WorkflowCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function WorkflowCard({
  icon,
  title,
  description,
}: WorkflowCardProps) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
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

export default WorkflowCard;