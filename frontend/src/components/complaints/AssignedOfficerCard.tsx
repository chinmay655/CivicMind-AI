import { User, Building2, CalendarDays } from "lucide-react";

interface AssignedOfficerCardProps {
  officerName?: string | null;
  department?: string | null;
  assignedDate?: string | null;
}

const AssignedOfficerCard = ({
  officerName,
  department,
  assignedDate,
}: AssignedOfficerCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        Assigned Officer
      </h2>

      {!officerName ? (
        <p className="text-slate-400">
          This complaint has not been assigned yet.
        </p>
      ) : (
        <div className="space-y-5">

          <div className="flex items-center gap-3">
            <User className="text-blue-400" size={20} />
            <div>
              <p className="text-xs text-slate-500">
                Officer
              </p>
              <p className="text-white">
                {officerName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Building2 className="text-green-400" size={20} />
            <div>
              <p className="text-xs text-slate-500">
                Department
              </p>
              <p className="text-white">
                {department}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <CalendarDays className="text-purple-400" size={20} />
            <div>
              <p className="text-xs text-slate-500">
                Assigned On
              </p>
              <p className="text-white">
                {assignedDate}
              </p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default AssignedOfficerCard;