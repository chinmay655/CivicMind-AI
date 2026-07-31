import { useState } from "react";
import { RefreshCcw } from "lucide-react";

interface UpdateStatusCardProps {
  currentStatus?: string;
}

const statusOptions = [
  "Pending",
  "Assigned",
  "In Progress",
  "Resolved",
  "Rejected",
];

const UpdateStatusCard = ({
  currentStatus = "Pending",
}: UpdateStatusCardProps) => {
  const [status, setStatus] = useState(currentStatus);
  const [remark, setRemark] = useState("");

  const handleUpdate = () => {
    alert(`Status updated to "${status}"\nRemark: ${remark}`);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-green-100 p-3">
          <RefreshCcw className="text-green-600" size={22} />
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            Update Status
          </h2>

          <p className="text-sm text-slate-500">
            Change the complaint status and add remarks.
          </p>
        </div>
      </div>

      <label className="mb-2 block text-sm font-medium">
        Status
      </label>

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="mb-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-500"
      >
        {statusOptions.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <label className="mb-2 block text-sm font-medium">
        Remark
      </label>

      <textarea
        rows={4}
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
        placeholder="Write an update..."
        className="mb-5 w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-green-500 resize-none"
      />

      <button
        onClick={handleUpdate}
        className="w-full rounded-xl bg-green-600 py-3 font-medium text-white transition hover:bg-green-700"
      >
        Save Status
      </button>

    </div>
  );
};

export default UpdateStatusCard;