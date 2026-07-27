import { ClipboardList } from "lucide-react";
import { ComplaintFormData } from "../../types/complaint";

interface ComplaintFormProps {
  formData: ComplaintFormData;
  setFormData: React.Dispatch<
    React.SetStateAction<ComplaintFormData>
  >;
  onSubmit: () => void;
  loading: boolean;
}

const ComplaintForm = ({
  formData,
  setFormData,
  onSubmit,
  loading,
}: ComplaintFormProps) => {
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
        {/* Title */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Issue Title
          </label>

          <input
            type="text"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            placeholder="e.g. Large pothole on MG Road"
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Category
          </label>

          <select
            value={formData.category}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                category: e.target.value,
              }))
            }
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          >
            <option value="">Select Category</option>
            <option value="Road Damage">Road Damage</option>
            <option value="Garbage">Garbage</option>
            <option value="Street Light">Street Light</option>
            <option value="Water Leakage">Water Leakage</option>
            <option value="Drainage">Drainage</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Description
          </label>

          <textarea
            rows={5}
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            placeholder="Describe the issue..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className="rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Complaint"}
        </button>
      </div>
    </section>
  );
};

export default ComplaintForm;