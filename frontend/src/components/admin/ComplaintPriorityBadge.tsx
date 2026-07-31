interface Props {
  priority: string;
}

const priorityStyles: Record<string, string> = {
  Low: "bg-green-100 text-green-700",
  Medium: "bg-yellow-100 text-yellow-700",
  High: "bg-orange-100 text-orange-700",
  Critical: "bg-red-100 text-red-700",
};

const ComplaintPriorityBadge = ({ priority }: Props) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        priorityStyles[priority] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {priority}
    </span>
  );
};

export default ComplaintPriorityBadge;