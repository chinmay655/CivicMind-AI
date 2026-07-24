import { ArrowRight } from "lucide-react";

function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 py-28">
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-8 text-center">

        <span className="rounded-full bg-white/15 px-5 py-2 text-sm font-medium text-white backdrop-blur">
          🚀 AI Powered Urban Intelligence
        </span>

        <h2 className="mt-8 text-5xl font-bold leading-tight text-white">
          Ready to Build Smarter Cities?
        </h2>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
          Empower municipalities with AI-driven complaint management,
          predictive analytics, and intelligent decision-making to improve
          urban infrastructure.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:scale-105">
            Request Demo
          </button>

          <button className="flex items-center gap-2 rounded-xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/10">
            Explore Dashboard
            <ArrowRight size={20} />
          </button>

        </div>

      </div>
    </section>
  );
}

export default CTA;