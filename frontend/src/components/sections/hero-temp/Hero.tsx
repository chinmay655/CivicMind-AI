import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import DashboardPreview from "../../dashboard-preview/DashboardPreview";
function Hero() {
  return (
    <section className="min-h-[90vh] bg-slate-50 flex items-center">
      <div className="mx-auto max-w-[1440px] px-8">

        <div className="grid items-center gap-16 lg:grid-cols-[45%_55%]">

          <HeroContent />

          <DashboardPreview />

        </div>

      </div>
    </section>
  );
}

export default Hero;