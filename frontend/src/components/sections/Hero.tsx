function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
          🚀 AI Powered Urban Infrastructure Platform
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl">
          Build Smarter Cities with
          <span className="text-blue-600"> CivicMind AI</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
          Report potholes, garbage, broken streetlights, drainage issues,
          and damaged roads using AI-powered image detection,
          intelligent prioritization, and real-time complaint tracking.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition hover:bg-blue-700">
            Report an Issue
          </button>

          <button className="rounded-xl border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-700 transition hover:bg-gray-100">
            Explore Dashboard
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;