// ==========================================
// src/pages/About.tsx
// ==========================================

import {
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineEye,
  HiOutlineUsers,
  HiOutlineClipboardCheck,
  HiOutlineOfficeBuilding,
} from "react-icons/hi";

export default function About() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F4F7FB] pt-36 pb-24">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-200/30 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* HERO */}
        <div className="text-center max-w-4xl mx-auto mb-24">

          <div className="inline-flex items-center gap-3 bg-blue-100 text-blue-700 px-6 py-3 rounded-full font-semibold mb-8">

            <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>

            About Platform

          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-[#031B63] leading-tight mb-8">

            PengaduanKu
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Digital Public Service
            </span>

          </h1>

          <p className="text-xl text-gray-600 leading-10">

            Platform pengaduan masyarakat modern yang membantu
            warga melaporkan masalah fasilitas umum, lingkungan,
            keamanan, dan pelayanan publik secara cepat,
            aman, serta transparan.

          </p>

        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-20">

          {/* LEFT */}
          <div className="bg-white rounded-[35px] p-10 lg:p-14 shadow-sm border border-gray-100">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-3xl">
                <HiOutlineOfficeBuilding />
              </div>

              <div>

                <h2 className="text-3xl font-bold text-gray-800">
                  Tentang Kami
                </h2>

                <p className="text-gray-500 mt-1">
                  Solusi layanan masyarakat modern
                </p>

              </div>

            </div>

            <p className="text-gray-600 leading-9 text-lg mb-6">

              PengaduanKu hadir untuk membantu masyarakat
              menyampaikan aspirasi dan laporan dengan lebih
              mudah melalui teknologi digital yang modern
              dan responsif.

            </p>

            <p className="text-gray-600 leading-9 text-lg">

              Kami percaya bahwa pelayanan publik yang baik
              dimulai dari komunikasi yang cepat, transparan,
              dan mudah diakses oleh seluruh masyarakat.

            </p>

          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-200/30 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
              alt="team"
              className="relative h-[500px] w-full object-cover rounded-[35px] shadow-2xl"
            />

          </div>

        </div>

        {/* FEATURES */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6">
              <HiOutlineLightningBolt />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Cepat
            </h2>

            <p className="text-gray-600 leading-8">
              Proses pengaduan lebih cepat dengan sistem
              digital yang terintegrasi langsung.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-600 flex items-center justify-center text-3xl mb-6">
              <HiOutlineShieldCheck />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Aman
            </h2>

            <p className="text-gray-600 leading-8">
              Seluruh data pengguna dilindungi menggunakan
              sistem keamanan modern dan terenkripsi.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center text-3xl mb-6">
              <HiOutlineEye />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Transparan
            </h2>

            <p className="text-gray-600 leading-8">
              Masyarakat dapat memantau perkembangan laporan
              secara real-time dan terbuka.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-yellow-100 text-yellow-600 flex items-center justify-center text-3xl mb-6">
              <HiOutlineUsers />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Terhubung
            </h2>

            <p className="text-gray-600 leading-8">
              Menghubungkan masyarakat dengan instansi
              terkait secara lebih efisien.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-white rounded-[30px] p-8 shadow-sm border border-gray-100 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center text-3xl mb-6">
              <HiOutlineClipboardCheck />
            </div>

            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Responsif
            </h2>

            <p className="text-gray-600 leading-8">
              Laporan diproses lebih responsif oleh petugas
              sesuai kategori pengaduan.
            </p>

          </div>

          {/* CARD */}
          <div className="bg-gradient-to-br from-[#031B63] to-cyan-500 rounded-[30px] p-8 text-white shadow-xl">

            <h2 className="text-3xl font-black leading-tight mb-5">
              Bersama Membangun Kota Lebih Baik
            </h2>

            <p className="leading-8 text-blue-100 mb-8">

              Jadilah bagian dari perubahan dengan
              melaporkan masalah publik secara aktif.

            </p>

            <button className="bg-white text-[#031B63] px-7 py-4 rounded-2xl font-semibold hover:scale-105 transition">
              Mulai Sekarang
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}