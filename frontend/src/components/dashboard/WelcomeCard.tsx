import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const WelcomeCard = () => {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 18) greeting = "Good Afternoon";

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-8 shadow-2xl">

      {/* Background Effects */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Section */}
        <div className="max-w-2xl">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

            <Sparkles className="h-4 w-4 text-yellow-300" />

            <span className="text-sm font-medium text-white">
              AI Powered Civic Platform
            </span>

          </div>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            {greeting},
            <br />
            {user?.full_name ?? "Citizen"} 👋
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-blue-100">
            Welcome back to CivicMind AI. Help improve your city by reporting
            civic issues, tracking resolutions, and contributing to smarter
            urban infrastructure.
          </p>

          <div className="mt-6 flex items-center gap-2 text-blue-100">
            <CalendarDays className="h-5 w-5" />
            <span>{today}</span>
          </div>

          {/* Quick Stats */}
          <div className="mt-8 flex flex-wrap gap-4">

            <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-200">
                Today's Reports
              </p>
              <p className="text-2xl font-bold text-white">12</p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-200">
                Resolution Rate
              </p>
              <p className="text-2xl font-bold text-white">92%</p>
            </div>

            <div className="rounded-2xl bg-white/10 px-5 py-3 backdrop-blur-md">
              <p className="text-xs uppercase tracking-wide text-blue-200">
                AI Status
              </p>
              <p className="text-2xl font-bold text-green-300">Online</p>
            </div>

          </div>

        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start gap-4 lg:items-end">

          <button className="flex items-center gap-3 rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">

            Report New Issue

            <ArrowRight className="h-5 w-5" />

          </button>

          <p className="max-w-xs text-right text-sm text-blue-100">
            Every report helps make your community cleaner, safer, and more
            connected.
          </p>

        </div>

      </div>
    </div>
  );
};

export default WelcomeCard;