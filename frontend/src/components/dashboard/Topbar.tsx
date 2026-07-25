import {
  Bell,
  Search,
  Sun,
  UserCircle,
} from "lucide-react";

const Topbar = () => {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-slate-800 bg-slate-950/80 px-8 backdrop-blur-md">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Dashboard
        </h1>

        <p className="text-sm text-slate-400">
          {today}
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Search */}
        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-xl border border-slate-700 bg-slate-900 py-2 pl-10 pr-4 text-white outline-none transition focus:border-blue-500"
          />
        </div>

        {/* Theme */}
        <button className="rounded-xl bg-slate-900 p-3 text-slate-400 transition hover:text-white">
          <Sun size={20} />
        </button>

        {/* Notifications */}
        <button className="relative rounded-xl bg-slate-900 p-3 text-slate-400 transition hover:text-white">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl bg-slate-900 px-4 py-2">
          <UserCircle
            size={38}
            className="text-blue-400"
          />

          <div>
            <h3 className="text-sm font-semibold text-white">
              Chinmay Ghogale
            </h3>

            <p className="text-xs text-slate-400">
              Citizen
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;