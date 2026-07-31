import { NavLink } from "react-router-dom";
import { navigation } from "./navigation";
import { Sparkles, HelpCircle } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r border-slate-200 bg-white">

      {/* Logo */}
      <div className="border-b border-slate-200 px-6 py-7">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg">

            <Sparkles className="h-7 w-7 text-white" />

          </div>

          <div>

            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              CivicMind AI
            </h1>

            <p className="text-sm text-slate-500">
              Urban Intelligence Platform
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-6">

        <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
          Navigation
        </p>

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon
                size={20}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Help Card */}
      <div className="px-4 pb-5">

        <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 p-5">

          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow">

            <HelpCircle className="h-6 w-6 text-blue-600" />

          </div>

          <h3 className="font-semibold text-slate-900">
            Need Help?
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            Learn how to report issues, track complaints, and explore AI
            insights.
          </p>

          <button className="mt-5 w-full rounded-xl bg-blue-600 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg">
            View Guide
          </button>

        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-slate-200 px-6 py-5">

        <p className="text-sm font-medium text-slate-700">
          CivicMind AI
        </p>

        <p className="mt-1 text-xs text-slate-500">
          Version 2.0 • Smart City Suite
        </p>

      </div>

    </aside>
  );
};

export default Sidebar;