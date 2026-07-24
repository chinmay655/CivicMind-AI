import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import { Sparkles } from "lucide-react";
function HeroContent() {
  return (
    <div>

      <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
        <Sparkles size={16} />
        AI-Powered Urban Intelligence
      </div>

      <h1 className="mt-8 text-5xl font-extrabold leading-tight tracking-tight text-slate-900 lg:text-7xl">
        Build Smarter Cities
      <br/>
        with
      <span className="block text-blue-600">
        CivicMind AI
      </span>
    </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-slate-600">
        Detect infrastructure issues using Artificial Intelligence,
        prioritize repairs automatically, and enable municipalities
        to respond faster through one intelligent platform.
      </p>
      <div className="mt-8 flex items-center gap-2 text-sm text-slate-600">
        <div className="h-2 w-2 rounded-full bg-green-500" />

        Trusted by 120+ Municipal Wards
      </div>
      <HeroButtons />

      <HeroStats />

    </div>
  );
}

export default HeroContent;