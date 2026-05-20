// ===============================
// src/components/Hero.tsx
// ===============================

import { motion } from "framer-motion";

import {
  HiOutlineCamera,
  HiOutlineTruck,
  HiOutlineHeart,
} from "react-icons/hi";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#031B63] overflow-hidden relative pt-32">

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center min-h-screen">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          {/* Title */}
          <h1 className="text-white text-6xl lg:text-7xl leading-[1.1] font-light max-w-2xl">

            Pengaduan digital
            untuk membantu
            masyarakat
            menyampaikan
            aspirasi

          </h1>

          {/* Button */}
          <a href="#lapor" className="inline-block mt-12 bg-[#2EE6C5] hover:bg-[#25d4b5] text-[#031B63] px-10 py-5 rounded-full text-2xl font-semibold transition">

            Buat Laporan Sekarang

          </a>

        </motion.div>

        {/* ================= RIGHT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >

          {/* Border */}
          <div className="absolute bottom-[-18px] left-[20px] w-[470px] h-[560px] border-2 border-[#2EE6C5] rounded-[30px]"></div>

          {/* Main Image */}
          <div className="relative w-[470px] h-[560px] rounded-[30px] overflow-hidden bg-white">

            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="hero"
              className="w-full h-full object-cover"
            />

          </div>

          {/* Healthcare */}
          <div className="absolute left-[-40px] top-[160px] bg-[#2D7FF9] text-white px-8 py-4 rounded-full text-2xl shadow-xl">

            Healthcare

          </div>

          {/* Taxes */}
          <div className="absolute right-[-10px] bottom-[70px] bg-[#2EE6C5] text-white px-8 py-4 rounded-full text-2xl shadow-xl">

            Taxes

          </div>

          {/* Ambulance */}
          <div className="absolute left-[-35px] bottom-[120px] w-24 h-24 rounded-full bg-white shadow-2xl flex items-center justify-center">

            <HiOutlineTruck className="text-5xl text-[#2D7FF9]" />

          </div>

          {/* Camera */}
          <div className="absolute right-[-35px] top-[220px] w-24 h-24 rounded-full bg-[#2EE6C5] shadow-2xl flex items-center justify-center">

            <HiOutlineCamera className="text-5xl text-white" />

          </div>

          {/* Transport */}
          <div className="absolute right-[20px] top-[60px] w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center">

            🚌

          </div>

        </motion.div>

      </div>

    </section>
  );
}