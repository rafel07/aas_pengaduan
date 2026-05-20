// src/pages/Home.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import CtaBanner from "../components/CtaBanner";

export default function Home() {
  return (
    <div className="overflow-x-hidden bg-[#F4F9FF] min-h-screen">

      {/* NAVBAR */}
      <Navbar showLogin={false} />

      {/* HERO */}
      <Hero />

      {/* FEATURES */}
      <FeaturesSection />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* CTA */}
      <CtaBanner />

      {/* FOOTER */}
      <Footer />

    </div>
  );
}