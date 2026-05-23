// src/pages/Home.tsx

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import FeaturesSection from "../components/FeaturesSection";
import ReportFormSection from "../components/ReportFormSection";

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

      {/* LAPORAN FORM */}
      <ReportFormSection />


      {/* FOOTER */}
      <Footer />

    </div>
  );
}