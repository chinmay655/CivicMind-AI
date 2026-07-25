import { ArrowRight, Sparkles } from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const WelcomeCard = () => {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-8 shadow-2xl">

      {/* Background Blur */}
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/20 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

        {/* Left */}
        <div>

          <div className="mb-4 flex items-center gap-2 text-blue-200">

            <Sparkles size={20} />

            <span className="font-medium">
              CivicMind AI
            </span>

          </div>

          <h1 className="text-4xl font-bold text-white">
            {greeting},
            <br />
            {user?.full_name ?? "Citizen"} 👋
          </h1>

          <p className="mt-4 max-w-xl text-slate-200">
            Help build a smarter, cleaner and safer city.
            Report civic issues, track progress and contribute
            towards better urban infrastructure.
          </p>

        </div>

        {/* Right */}
        <button className="flex items-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 transition hover:scale-105">

          Report New Issue

          <ArrowRight size={20} />

        </button>

      </div>
    </div>
  );
};

export default WelcomeCard;