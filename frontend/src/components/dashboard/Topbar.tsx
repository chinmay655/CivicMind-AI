import {
  Bell,
  CalendarDays,
  ChevronDown,
  Search,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const Topbar = () => {
  const { user } = useAuth();

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-lg">

      <div className="flex h-20 items-center justify-between px-8">

        {/* Left */}
        <div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Dashboard
          </h1>

          <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">

            <CalendarDays size={15} />

            <span>{today}</span>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-4">

          {/* Search */}

          <div className="relative hidden lg:block">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search complaints..."
              className="
                w-80
                rounded-2xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                text-sm
                text-slate-700
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-400
                focus:border-blue-500
                focus:bg-white
                focus:ring-4
                focus:ring-blue-100
              "
            />

          </div>

          {/* Notification */}

          <button className="relative rounded-2xl border border-slate-200 bg-white p-3 transition-all duration-300 hover:bg-slate-50 hover:shadow-md">

            <Bell
              size={20}
              className="text-slate-700"
            />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500"></span>

          </button>

          {/* Profile */}

          <button className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition-all duration-300 hover:shadow-md">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-sm font-bold text-white">

              {user?.full_name
                ?.split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2)
                .toUpperCase() || "U"}

            </div>

            <div className="hidden text-left md:block">

              <p className="text-sm font-semibold text-slate-900">

                {user?.full_name || "Citizen"}

              </p>

              <p className="text-xs text-slate-500">

                {user?.role || "Citizen"}

              </p>

            </div>

            <ChevronDown
              size={18}
              className="text-slate-500"
            />

          </button>

        </div>

      </div>

    </header>
  );
};

export default Topbar;