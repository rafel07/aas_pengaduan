import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Help() {
  return (
    <div className="bg-[#F4F9FF] min-h-screen flex flex-col">
      <Navbar showLogin={false} />

      <section className="flex-1 pt-36 pb-24 relative overflow-hidden">
        {/* BACKGROUND BLURS */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-cyan-100 text-cyan-700 px-6 py-3 rounded-full font-semibold mb-8">
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
            Pusat Bantuan
          </div>

          <h1 className="text-5xl lg:text-7xl font-black text-[#031B63] leading-tight mb-8">
            Pertanyaan yang Sering <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Ditanyakan (FAQ)
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-10 mb-16">
            Temukan jawaban atas pertanyaan umum terkait penggunaan aplikasi pengaduan masyarakat ini.
          </p>
          
          <div className="space-y-6 text-left">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Bagaimana cara mengirimkan laporan?</h3>
              <p className="text-gray-600">Anda dapat kembali ke Halaman Utama dan mengklik tombol "Buat Laporan Sekarang". Pastikan Anda sudah login terlebih dahulu sebelum mengirimkan laporan.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Apakah data saya aman?</h3>
              <p className="text-gray-600">Ya, data Anda kami lindungi dengan aman. Namun kami sarankan untuk tidak mencantumkan informasi pribadi yang terlalu sensitif di dalam deskripsi laporan terbuka Anda.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Berapa lama laporan saya ditangani?</h3>
              <p className="text-gray-600">Laporan Anda akan otomatis masuk ke sistem dan akan diproses secepatnya oleh dinas atau instansi yang bersangkutan. Anda dapat memantau statusnya di Dashboard Anda.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}