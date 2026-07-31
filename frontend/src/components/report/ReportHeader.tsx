import { AlertTriangle, ShieldCheck } from "lucide-react";

const ReportHeader = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl">

      {/* Background Glow */}
      <div className="absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
            <ShieldCheck size={18} />
            CivicMind AI
          </div>

          <h1 className="text-4xl font-bold text-white">
            Report a Civic Issue
          </h1>

          <p className="mt-4 max-w-2xl text-slate-400">
            Help improve your city by reporting potholes, damaged roads,
            streetlight failures, garbage issues, water leaks and more.
            Your report will be analyzed and forwarded to the responsible authority.
          </p>
        </div>

        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/10 p-5">

          <div className="flex items-start gap-3">

            <AlertTriangle
              className="mt-1 text-amber-400"
              size={24}
            />

            <div>
              <h3 className="font-semibold text-white">
                Emergency?
              </h3>

              <p className="mt-1 text-sm text-slate-300">
                For life-threatening situations, immediately contact local
                emergency services instead of submitting a complaint.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ReportHeader;