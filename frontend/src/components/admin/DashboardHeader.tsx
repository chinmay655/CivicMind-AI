import { Bell, Download, Sparkles } from "lucide-react";

const DashboardHeader = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="text-4xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Welcome back! Here's what's happening today.
        </p>

        <p className="mt-1 text-sm text-slate-500">
          {today}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button className="rounded-xl border border-slate-700 bg-slate-900 p-3 text-slate-300 transition hover:border-slate-500 hover:text-white">
          <Bell size={20} />
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-slate-500 hover:text-white">
          <Download size={18} />
          Export Data
        </button>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
          <Sparkles size={18} />
          Generate AI Report
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;