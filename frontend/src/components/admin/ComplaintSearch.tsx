import { Search, X } from "lucide-react";
import { useState } from "react";

const ComplaintSearch = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="relative">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search by Complaint ID, Title, Citizen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-12 outline-none transition focus:border-blue-500"
        />

        {search && (
          <button
            onClick={() => setSearch("")}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          >
            <X
              size={18}
              className="text-slate-400 hover:text-red-500"
            />
          </button>
        )}

      </div>
    </div>
  );
};

export default ComplaintSearch;