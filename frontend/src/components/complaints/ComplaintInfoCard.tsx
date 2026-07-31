import {
  CalendarDays,
  MapPin,
  Tag,
  AlertTriangle,
} from "lucide-react";

interface ComplaintInfoCardProps {
  id: number;
  title: string;
  description: string;
  category: string;
  priority: string;

  status:
    | "Pending"
    | "Assigned"
    | "Accepted"
    | "In Progress"
    | "Resolved"
    | "Rejected";

  address: string;
  date: string;

  department?: string | null;
  aiIssue?: string | null;
  aiConfidence?: number | null;
}

const statusStyles = {
  Pending: "bg-yellow-500/15 text-yellow-400",
  Assigned: "bg-purple-500/15 text-purple-400",
  Accepted: "bg-cyan-500/15 text-cyan-400",
  "In Progress": "bg-blue-500/15 text-blue-400",
  Resolved: "bg-green-500/15 text-green-400",
  Rejected: "bg-red-500/15 text-red-400",
};

const ComplaintInfoCard = ({
  title,
  description,
  category,
  priority,
  status,
  address,
  date,
  department,
  aiIssue,
  aiConfidence,
}: ComplaintInfoCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">
          {title}
        </h2>

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${statusStyles[status]}`}
        >
          {status}
        </span>
      </div>

      <p className="mt-4 leading-7 text-slate-400">
        {description}
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">

        <div className="flex items-center gap-3">
          <Tag className="text-blue-400" size={20} />
          <div>
            <p className="text-xs text-slate-500">Category</p>
            <p className="text-white">{category}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <AlertTriangle className="text-orange-400" size={20} />
          <div>
            <p className="text-xs text-slate-500">Priority</p>
            <p className="text-white">{priority}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-green-400" size={20} />
          <div>
            <p className="text-xs text-slate-500">Address</p>
            <p className="text-white">{address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <CalendarDays className="text-purple-400" size={20} />
          <div>
            <p className="text-xs text-slate-500">Reported On</p>
            <p className="text-white">{date}</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComplaintInfoCard;