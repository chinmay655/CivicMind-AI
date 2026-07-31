import { Trash2, CheckCircle, UserCheck } from "lucide-react";

const BulkActionBar = () => {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-lg font-semibold">
          Bulk Actions
        </h2>

        <p className="text-sm text-slate-500">
          Apply actions to multiple selected complaints.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
          <UserCheck size={18} />
          Assign Officer
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2 text-white transition hover:bg-green-700">
          <CheckCircle size={18} />
          Mark Resolved
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-white transition hover:bg-red-700">
          <Trash2 size={18} />
          Delete
        </button>

      </div>
    </div>
  );
};

export default BulkActionBar;