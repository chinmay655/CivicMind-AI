import { ClipboardList } from "lucide-react";

const ComplaintForm = () => {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <div className="mb-6 flex items-center gap-3">

        <ClipboardList
          size={28}
          className="text-blue-400"
        />

        <h2 className="text-2xl font-semibold text-white">
          Complaint Details
        </h2>

      </div>

      <div className="grid gap-6">

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Issue Title
          </label>

          <input
            type="text"
            placeholder="e.g. Large pothole on MG Road"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
          </label>

          <select
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          >
            <option>Road Damage</option>
            <option>Garbage</option>
            <option>Street Light</option>
            <option>Water Leakage</option>
            <option>Drainage</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Describe the issue..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Submit Complaint
        </button>

      </div>

    </section>
  );
};

export default ComplaintForm;