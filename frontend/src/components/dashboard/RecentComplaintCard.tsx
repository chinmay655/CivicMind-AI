import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

interface RecentComplaintCardProps {
  id: string;
  title: string;
  location: string;
  status: string;
}

const statusColors: Record<string, string> = {
  Pending: "bg-yellow-500/20 text-yellow-400",
  Assigned: "bg-purple-500/20 text-purple-400",
  Accepted: "bg-cyan-500/20 text-cyan-400",
  "In Progress": "bg-blue-500/20 text-blue-400",
  Resolved: "bg-green-500/20 text-green-400",
  Rejected: "bg-red-500/20 text-red-400",
};

const RecentComplaintCard = ({
  id,
  title,
  location,
  status,
}: RecentComplaintCardProps) => {
  return (
    <Link
      to={`/complaints/${id}`}
      className="block rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-blue-500 hover:-translate-y-1"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-white">{title}</h3>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            statusColors[status]
          }`}
        >
          {status}
        </span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-slate-400">
        <MapPin size={16} />
        {location}
      </div>

      <div className="mt-4 flex justify-end text-blue-400">
        <ArrowRight size={18} />
      </div>
    </Link>
  );
};

export default RecentComplaintCard;