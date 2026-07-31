import {
  Brain,
  AlertTriangle,
  IndianRupee,
  ShieldCheck,
} from "lucide-react";

const AIAnalysisCard = () => {
  return (
    <section className="rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 to-slate-800 p-6">

      <div className="mb-6 flex items-center gap-3">

        <div className="rounded-xl bg-cyan-500/10 p-3">

          <Brain
            size={24}
            className="text-cyan-400"
          />

        </div>

        <div>

          <h2 className="text-xl font-bold text-white">
            AI Analysis
          </h2>

          <p className="text-sm text-slate-400">
            Generated after image upload
          </p>

        </div>

      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 p-4">

          <div className="flex items-center gap-3">

            <AlertTriangle
              className="text-red-400"
              size={20}
            />

            <span className="text-slate-300">
              Severity
            </span>

          </div>

          <span className="font-bold text-red-400">
            High
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 p-4">

          <div className="flex items-center gap-3">

            <ShieldCheck
              className="text-green-400"
              size={20}
            />

            <span className="text-slate-300">
              Confidence
            </span>

          </div>

          <span className="font-bold text-green-400">
            96%
          </span>

        </div>

        <div className="flex items-center justify-between rounded-2xl bg-slate-800/70 p-4">

          <div className="flex items-center gap-3">

            <IndianRupee
              className="text-blue-400"
              size={20}
            />

            <span className="text-slate-300">
              Estimated Cost
            </span>

          </div>

          <span className="font-bold text-blue-400">
            ₹15,000
          </span>

        </div>

      </div>

    </section>
  );
};

export default AIAnalysisCard;