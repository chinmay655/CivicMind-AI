import { MapPin, CalendarDays, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ComplaintCardProps {
  id: number;
  title: string;
  location: string;
  status:
    | "Pending"
    | "Assigned"
    | "Accepted"
    | "In Progress"
    | "Resolved"
    | "Rejected";
  priority: "Low" | "Medium" | "High" | "Critical";
  date: string;
}

const statusStyles = {
  Pending: "bg-yellow-500/15 text-yellow-400",
  Assigned: "bg-purple-500/15 text-purple-400",
  Accepted: "bg-cyan-500/15 text-cyan-400",
  "In Progress": "bg-blue-500/15 text-blue-400",
  Resolved: "bg-green-500/15 text-green-400",
  Rejected: "bg-red-500/15 text-red-400",
};

const priorityStyles = {
  Low: "text-green-400",
  Medium: "text-yellow-400",
  High: "text-orange-400",
  Critical: "text-red-400",
};

const ComplaintCard = ({
  id,
  title,
  location,
  status,
  priority,
  date,
}: ComplaintCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:border-blue-500 hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            CMP-{id}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <div className="mt-5 flex items-center gap-2 text-slate-400">
        <MapPin size={18} />
        <span>{location}</span>
      </div>

      <div className="mt-3 flex items-center gap-2 text-slate-400">
        <CalendarDays size={18} />
        <span>{date}</span>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <span className={`font-semibold ${priorityStyles[priority]}`}>
          {priority} Priority
        </span>

        <Link
          to={`/complaints/${id}`}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View Details
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ComplaintCard;