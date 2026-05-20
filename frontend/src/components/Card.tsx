import type { ReactNode } from "react";
import { HiSpeakerphone } from "react-icons/hi";

type CardProps = {
  title: string;
  desc: string;
  icon?: ReactNode;
};

export default function Card({
  title,
  desc,
  icon = <HiSpeakerphone />,
}: CardProps) {
  return (
    <div className="group relative overflow-hidden rounded-[42px] bg-white/70 backdrop-blur-2xl border border-white/30 p-10 shadow-[0_20px_80px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-[0_35px_100px_rgba(37,99,235,0.28)] transition-all duration-700">

      {/* ================= BACKGROUND ================= */}

      {/* Gradient Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-100 transition duration-700"></div>

      {/* Blur Glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-cyan-200/40 rounded-full blur-3xl group-hover:scale-125 transition duration-700"></div>

      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl group-hover:scale-125 transition duration-700"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition duration-700"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Floating Dot */}
      <div className="absolute top-7 right-7 w-4 h-4 rounded-full bg-cyan-400 animate-pulse shadow-lg"></div>

      {/* ================= ICON ================= */}

      <div className="relative z-10 flex items-start justify-between mb-10">

        <div className="relative">

          {/* Icon Glow */}
          <div className="absolute inset-0 bg-cyan-300 blur-2xl opacity-40 rounded-[35px]"></div>

          {/* Icon Box */}
          <div className="relative w-24 h-24 rounded-[32px] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-center text-5xl text-white shadow-[0_20px_40px_rgba(37,99,235,0.45)] group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">

            {icon}

          </div>

        </div>

        {/* Badge */}
        <div className="bg-white/80 backdrop-blur-xl border border-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-black shadow-md">

          Premium

        </div>

      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10">

        {/* Title */}
        <h2 className="text-3xl lg:text-4xl font-black text-gray-800 leading-tight mb-6 group-hover:text-blue-700 transition duration-300">

          {title}

        </h2>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-10">

          {desc}

        </p>

      </div>

      {/* ================= BOTTOM ================= */}

      <div className="relative z-10 mt-12 flex items-center justify-between">

        {/* Explore */}
        <button className="group/btn flex items-center gap-4 text-blue-700 font-black text-lg">

          <span className="relative">

            Explore

            <div className="absolute left-0 -bottom-1 w-0 h-[3px] bg-gradient-to-r from-blue-700 to-cyan-500 rounded-full group-hover/btn:w-full transition-all duration-300"></div>

          </span>

          <span className="text-2xl group-hover/btn:translate-x-2 transition duration-300">
            →
          </span>

        </button>

        {/* Small Info */}
        <div className="text-sm text-gray-400 font-semibold tracking-wide uppercase">

          Modern UI

        </div>

      </div>

      {/* ================= BORDER EFFECT ================= */}

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 h-[4px] w-0 bg-gradient-to-r from-blue-700 via-cyan-500 to-sky-400 group-hover:w-full transition-all duration-700"></div>
        
      {/* Top Border */}
      <div className="absolute top-0 right-0 h-[4px] w-0 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-700 group-hover:w-full transition-all duration-700"></div>

    </div>
  );
}