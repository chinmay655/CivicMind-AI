function HeroImage() {
  return (
    <div className="relative w-full">

      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-bold text-slate-900">
            CivicMind Dashboard
          </h3>

          <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
            Live
          </span>
        </div>

        <div className="space-y-5">

          <div className="h-5 w-full rounded-full bg-slate-200"></div>

          <div className="h-5 w-10/12 rounded-full bg-slate-200"></div>

          <div className="h-5 w-8/12 rounded-full bg-slate-200"></div>

          <div className="mt-10 grid grid-cols-2 gap-5">

            <div className="h-40 rounded-2xl bg-blue-100"></div>

            <div className="h-40 rounded-2xl bg-slate-100"></div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HeroImage;