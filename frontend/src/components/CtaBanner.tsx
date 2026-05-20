import { useState } from "react";
import { useReports } from "../hooks/useReports";
import { HiOutlineX, HiOutlineCheckCircle } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function CtaBanner() {
  const [showModal, setShowModal] = useState(false);
  
  const { addReport } = useReports();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Infrastruktur");
  const [description, setDescription] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description) return;

    addReport({
      title,
      category,
      description,
    });

    setIsSubmitted(true);
    setTitle("");
    setCategory("Infrastruktur");
    setDescription("");

    setTimeout(() => {
      setIsSubmitted(false);
      setShowModal(false);
    }, 3000);
  };

  return (
    <section id="lapor" className="w-full py-24 px-6 bg-[#F4F9FF]">
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
            <button 
              onClick={() => setShowModal(true)}
              className="bg-white text-blue-700 px-10 py-4 rounded-full text-xl font-bold hover:scale-105 hover:shadow-xl hover:bg-gray-50 transition-all duration-300"
            >
              Buat Laporan Sekarang
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden"
            >
              <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                <h3 className="text-2xl font-black text-gray-800">Sampaikan Laporan</h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-red-100 hover:text-red-500 transition"
                >
                  <HiOutlineX className="text-xl" />
                </button>
              </div>

              <div className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                      <HiOutlineCheckCircle />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">Laporan Terkirim!</h3>
                    <p className="text-gray-500">
                      Terima kasih atas laporan Anda. Akan segera ditindaklanjuti.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Judul Laporan
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Contoh: Jalan berlubang di Jalan Mawar"
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Kategori
                      </label>
                      <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition"
                      >
                        <option value="Infrastruktur">Infrastruktur</option>
                        <option value="Fasilitas Umum">Fasilitas Umum</option>
                        <option value="Lingkungan">Lingkungan</option>
                        <option value="Keamanan">Keamanan</option>
                        <option value="Lainnya">Lainnya</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-bold mb-2">
                        Detail Laporan
                      </label>
                      <textarea
                        required
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                        placeholder="Ceritakan detail masalah yang Anda temukan..."
                        className="w-full rounded-xl border border-gray-200 bg-white px-5 py-3.5 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#031B63] hover:bg-blue-900 text-white py-4 rounded-xl font-bold text-lg transition duration-300 shadow-lg mt-4"
                    >
                      Kirim Laporan
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
