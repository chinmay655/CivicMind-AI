/**import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <div className="flex h-[80vh] items-center justify-center">
        <h1 className="text-6xl font-bold">
          CivicMind AI
        </h1>
      </div>
    </>
  );
}

export default Home;**/

import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/hero-temp";
import Features from "../components/sections/Features";
import HowItWorks from "../components/sections/HowItWorks";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
    </>
  );
}

export default Home;