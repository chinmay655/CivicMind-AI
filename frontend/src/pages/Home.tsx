import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/hero-temp";
import TrustedSection from "../components/sections/trusted";
import Features from "../components/sections/features";
import Workflow from "../components/workflow";
import Showcase from "../components/sections/showcase";
import AICapabilities from "../components/sections/ai-capabilities";
import Testimonials from "../components/sections/testimonials";
import FAQ from "../components/sections/faq";
import CTA from "../components/sections/cta";
import Footer from "../components/layout/footer";
function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedSection />
      <Features />
      <Workflow />
      <Showcase />
      <AICapabilities />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default Home;