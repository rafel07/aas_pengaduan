import { Link } from "react-router-dom";

export default function CtaBanner() {
  return (
    <section className="w-full py-24 px-6 bg-[#F4F9FF]">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 rounded-[3rem] p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden">
        {/* Decorative abstract shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-1/2 left-1/2 w-full h-full bg-blue-400 opacity-20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight">
            Siap untuk Membuat Perubahan <br className="hidden md:block" /> di Lingkungan Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Jangan biarkan fasilitas publik yang rusak mengganggu kenyamanan. Laporkan sekarang, dan biarkan instansi terkait menindaklanjutinya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/register"
              className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-xl hover:bg-gray-50 transition-all duration-300 inline-block"
            >
              Buat Laporan Sekarang
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
