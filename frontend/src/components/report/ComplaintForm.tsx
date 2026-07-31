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
    <section className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-8 shadow-2xl">

      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute -left-16 -bottom-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative">

      <div className="mb-8 flex items-start justify-between">

  <div className="flex items-center gap-4">

    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-blue-500/20">

      <ClipboardList
        size={28}
        className="text-blue-400"
      />

    </div>

    <div>

      <h2 className="text-2xl font-bold text-white">
        Complaint Details
      </h2>

      <p className="mt-1 text-sm text-slate-400">
        Provide complete information for faster resolution.
      </p>

    </div>

  </div>

  <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
    Required
  </span>

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

      </div>
       </div>
    </section>
  );
};

export default ComplaintForm;