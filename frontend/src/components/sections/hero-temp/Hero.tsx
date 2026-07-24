import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import DashboardPreview from "../../dashboard-preview/DashboardPreview";
function Hero() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-[42%_58%]">

          <HeroContent />

          <DashboardPreview />

        </div>

      </div>
    </section>
  );
}

export default Hero;