import { Search, Filter } from "lucide-react";

const filters = [
  "All",
  "Pending",
  "Assigned",
  "Accepted",
  "In Progress",
  "Resolved",
  "Rejected",
];

const ComplaintToolbar = () => {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            size={18}
          />

          <input
            type="text"
            placeholder="Search complaints..."
            className="w-full rounded-xl border border-slate-700 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {filter}
            </button>
          ))}

          <button className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 hover:border-blue-500">
            <Filter size={16} />
            More Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComplaintToolbar;