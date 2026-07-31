import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Clock3,
  UserCheck,
  Wrench,
  Circle,
} from "lucide-react";

import {
  ComplaintHistory,
  getComplaintHistory,
} from "../../services/complaintService";

interface ComplaintTimelineProps {
  complaintId: string;
}

const ComplaintTimeline = ({
  complaintId,
}: ComplaintTimelineProps) => {
  const [timeline, setTimeline] = useState<ComplaintHistory[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTimeline = async () => {
      try {
        const data = await getComplaintHistory(complaintId);
        setTimeline(data);
      } catch (error) {
        console.error("Failed to load complaint history:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTimeline();
  }, [complaintId]);

  const getIcon = (action: string) => {
    switch (action) {
      case "Complaint Created":
        return CheckCircle2;

      case "Officer Assigned":
        return UserCheck;

      case "Assignment Accepted":
        return Clock3;

      case "Work Started":
        return Wrench;

      case "Complaint Resolved":
        return CheckCircle2;

      default:
        return Circle;
    }
  };

  const getColor = (status: string | null) => {
    switch (status) {
      case "Pending":
        return "text-yellow-400";

      case "Assigned":
        return "text-purple-400";

      case "Accepted":
        return "text-cyan-400";

      case "In Progress":
        return "text-orange-400";

      case "Resolved":
        return "text-green-400";

      default:
        return "text-slate-400";
    }
  };

  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold text-white">
          Complaint Timeline
        </h2>

        <p className="mt-6 text-slate-400">
          Loading timeline...
        </p>
      </div>
    );
  }

  if (timeline.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
        <h2 className="text-2xl font-semibold text-white">
          Complaint Timeline
        </h2>

        <p className="mt-6 text-slate-400">
          No history available.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-8 text-2xl font-semibold text-white">
        Complaint Timeline
      </h2>

      <div className="space-y-8">
        {timeline.map((item, index) => {
          const Icon = getIcon(item.action);

          return (
            <div
              key={item.id}
              className="relative flex gap-5"
            >
              {index !== timeline.length - 1 && (
                <div className="absolute left-5 top-10 h-full w-px bg-slate-700" />
              )}

              <div
                className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 ${getColor(
                  item.new_status
                )}`}
              >
                <Icon size={18} />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-white">
                    {item.action}
                  </h3>

                  {item.new_status && (
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${getColor(
                        item.new_status
                      )} bg-slate-800`}
                    >
                      {item.new_status}
                    </span>
                  )}
                </div>

                {item.remarks && (
                  <p className="mt-2 text-sm text-slate-400">
                    {item.remarks}
                  </p>
                )}

                {item.old_status && item.new_status && (
                  <p className="mt-2 text-xs text-slate-500">
                    {item.old_status} → {item.new_status}
                  </p>
                )}

                <p className="mt-2 text-xs text-slate-500">
                  {new Date(item.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ComplaintTimeline;