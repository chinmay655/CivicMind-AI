import { useState } from "react";
import { UserCheck } from "lucide-react";

interface AssignOfficerCardProps {
  currentOfficer?: string;
}

const officers = [
  "Rahul Sharma",
  "Amit Patil",
  "Sneha Joshi",
  "Rohit Verma",
];

const AssignOfficerCard = ({
  currentOfficer = "",
}: AssignOfficerCardProps) => {
  const [selectedOfficer, setSelectedOfficer] =
    useState(currentOfficer);

  const handleAssign = () => {
    alert(`Assigned to ${selectedOfficer}`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3">
          <UserCheck
            className="text-blue-600"
            size={22}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Assign Officer
          </h2>

          <p className="text-sm text-slate-500">
            Select an officer for this complaint.
          </p>
        </div>
      </div>

      <label className="mb-2 block text-sm font-medium">
        Officer
      </label>

      <select
        value={selectedOfficer}
        onChange={(e) =>
          setSelectedOfficer(e.target.value)
        }
        className="mb-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
      >
        <option value="">Choose Officer</option>

        {officers.map((officer) => (
          <option
            key={officer}
            value={officer}
          >
            {officer}
          </option>
        ))}
      </select>

      <button
        onClick={handleAssign}
        className="w-full rounded-xl bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
      >
        Assign Officer
      </button>

    </div>
  );
};

export default AssignOfficerCard;