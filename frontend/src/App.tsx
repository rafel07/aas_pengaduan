// ==========================================
// src/App.tsx
// ==========================================

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import FeaturesSection from "./components/FeaturesSection";
import CtaBanner from "./components/CtaBanner";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SuperAdmin from "./pages/SuperAdmin";
import About from "./pages/About";
import Help from "./pages/Help";

// ==========================================
// LANDING PAGE
// ==========================================

function LandingPage() {
  return (
    <div className="overflow-x-hidden bg-[#F4F9FF] min-h-screen">

      {/* NAVBAR */}
      <Navbar />

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

// ==========================================
// APP
// ==========================================

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={<LandingPage />}
        />

        {/* HOME */}
        <Route
          path="/home"
          element={<Home />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        {/* SUPER ADMIN */}
        <Route
          path="/superadmin"
          element={<SuperAdmin />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* HELP */}
        <Route
          path="/help"
          element={<Help />}
        />

      </Routes>

    </BrowserRouter>
  );
}