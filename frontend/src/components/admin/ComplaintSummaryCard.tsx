import { CalendarDays, CircleAlert, FileText } from "lucide-react";

interface ComplaintSummaryCardProps {
  complaintId: string;
  title: string;
  priority: string;
  status: string;
  reportedDate: string;
}

const ComplaintSummaryCard = ({
  complaintId,
  title,
  priority,
  status,
  reportedDate,
}: ComplaintSummaryCardProps) => {
  return (
    <div className="rounded-2xl bg-white shadow-sm border border-slate-200 p-6">

      <div className="flex items-center gap-3 mb-5">
        <div className="rounded-xl bg-blue-100 p-3">
          <FileText className="text-blue-600" size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="text-sm text-slate-500">
            {complaintId}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-5">

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CircleAlert className="text-orange-500" size={18} />
            <span className="text-sm text-slate-500">
              Priority
            </span>
          </div>

          <p className="font-semibold text-slate-900">
            {priority}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CircleAlert className="text-green-500" size={18} />
            <span className="text-sm text-slate-500">
              Status
            </span>
          </div>

          <p className="font-semibold text-slate-900">
            {status}
          </p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="flex items-center gap-2 mb-2">
            <CalendarDays className="text-blue-500" size={18} />
            <span className="text-sm text-slate-500">
              Reported On
            </span>
          </div>

          <p className="font-semibold text-slate-900">
            {reportedDate}
          </p>
        </div>

      </div>

    </div>
  );
};

export default ComplaintSummaryCard;