import { FaGlobe, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { HiSpeakerphone, HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-32 bg-gradient-to-br from-[#06142E] via-[#0B2E68] to-[#06B6D4] text-white">

      {/* ================= BACKGROUND ================= */}

      {/* Blur */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-300/20 rounded-full blur-3xl"></div>

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-600"></div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-24">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-4 gap-16">

          {/* ================= LOGO ================= */}
          <div className="lg:col-span-2">

            {/* Logo */}
            <div className="flex items-center gap-5 mb-8">

              <div className="relative">

                <div className="absolute inset-0 bg-cyan-400 blur-xl opacity-40 rounded-3xl"></div>

                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 flex items-center justify-center shadow-[0_15px_40px_rgba(37,99,235,0.4)]">

                  <span className="text-4xl text-white">
                    <HiSpeakerphone />
                  </span>

                </div>

              </div>

              <div>

                <h1 className="text-5xl font-black bg-gradient-to-r from-white via-cyan-200 to-cyan-400 bg-clip-text text-transparent">

                  Depok Kini

                </h1>

                <p className="text-cyan-100 mt-2 tracking-[4px] uppercase text-sm">

                  Smart Report Platform

                </p>

              </div>

            </div>

            {/* Description */}
            <p className="text-blue-100 leading-10 text-lg max-w-2xl">

              Platform pengaduan masyarakat modern
              untuk membantu pelayanan publik yang
              cepat, aman, transparan, dan mudah digunakan
              oleh seluruh masyarakat Indonesia.

            </p>

            {/* Social */}
            <div className="flex items-center gap-5 mt-10">

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer text-white">
                <FaGlobe />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer text-white">
                <FaFacebook />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer text-white">
                <FaInstagram />
              </div>

              <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-2xl hover:scale-110 hover:bg-white/20 transition duration-300 cursor-pointer text-white">
                <FaYoutube />
              </div>

            </div>

          </div>

          {/* ================= NAVIGATION ================= */}
          <div>

            <h2 className="text-3xl font-black mb-8">
              Navigasi
            </h2>

            <ul className="space-y-5">

              <li className="group flex items-center gap-3 text-blue-100 hover:text-white cursor-pointer transition duration-300">

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                </span>

                Home

              </li>

              <li className="group flex items-center gap-3 text-blue-100 hover:text-white cursor-pointer transition duration-300">

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                </span>

                Laporan

              </li>

              <li className="group flex items-center gap-3 text-blue-100 hover:text-white cursor-pointer transition duration-300">

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                </span>

                About

              </li>

              <li className="group flex items-center gap-3 text-blue-100 hover:text-white cursor-pointer transition duration-300">

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                </span>

                Contact

              </li>

            </ul>

          </div>

          {/* ================= CONTACT ================= */}
          <div>

            <h2 className="text-3xl font-black mb-8">
              Kontak
            </h2>

            <div className="space-y-6">

              {/* Email */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-2xl border border-white/10 text-cyan-300">
                  <HiOutlineMail />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-blue-100">
                    admin@pengaduanku.id
                  </p>

                </div>

              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-2xl border border-white/10 text-cyan-300">
                  <HiOutlinePhone />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Telepon
                  </h3>

                  <p className="text-blue-100">
                    0812-3456-7890
                  </p>

                </div>

              </div>

              {/* Location */}
              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xl flex items-center justify-center text-2xl border border-white/10 text-cyan-300">
                  <HiOutlineLocationMarker />
                </div>

                <div>

                  <h3 className="font-bold text-lg">
                    Lokasi
                  </h3>

                  <p className="text-blue-100">
                    Bekasi, Indonesia
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-5">

          <p className="text-blue-100 text-lg text-center lg:text-left">

            © 2026 Depok Kini — All Rights Reserved

          </p>

          <div className="flex items-center gap-8 text-blue-100">

            <span className="hover:text-white cursor-pointer transition duration-300">
              Privacy Policy
            </span>

            <span className="hover:text-white cursor-pointer transition duration-300">
              Terms
            </span>

            <span className="hover:text-white cursor-pointer transition duration-300">
              Support
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}