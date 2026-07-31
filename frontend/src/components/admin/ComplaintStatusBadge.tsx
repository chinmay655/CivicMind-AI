interface Props {
  status: string;
}

const statusStyles: Record<string, string> = {
  Pending: "bg-yellow-100 text-yellow-700",
  Assigned: "bg-blue-100 text-blue-700",
  "In Progress": "bg-indigo-100 text-indigo-700",
  Resolved: "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

const ComplaintStatusBadge = ({ status }: Props) => {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        statusStyles[status] ?? "bg-slate-100 text-slate-700"
      }`}
    >
      {status}
    </span>
  );
};

export default ComplaintStatusBadge;