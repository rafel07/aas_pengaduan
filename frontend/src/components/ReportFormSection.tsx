import { useState } from "react";
import { useReports } from "../hooks/useReports";
import { HiOutlineCheckCircle } from "react-icons/hi";

export default function ReportFormSection() {
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
    }, 3000);
  };

  return (
    <section id="lapor" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4">
            Sampaikan <span className="text-cyan-500">Laporan Anda</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Bantu kami membangun kota yang lebih baik dengan melaporkan masalah di sekitar Anda.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 p-8 lg:p-12">
          
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-5xl mx-auto mb-6">
                <HiOutlineCheckCircle />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Laporan Berhasil Terkirim!</h3>
              <p className="text-gray-500">
                Terima kasih atas partisipasi Anda. Laporan Anda akan segera diproses oleh petugas. Anda dapat memantaunya di Dashboard.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label className="block text-gray-700 font-bold mb-3">
                  Judul Laporan
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Contoh: Jalan berlubang di Jalan Mawar"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-3">
                  Kategori
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition"
                >
                  <option value="Infrastruktur">Infrastruktur</option>
                  <option value="Fasilitas Umum">Fasilitas Umum</option>
                  <option value="Lingkungan">Lingkungan</option>
                  <option value="Keamanan">Keamanan</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-3">
                  Detail Laporan
                </label>
                <textarea
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  placeholder="Ceritakan detail masalah yang Anda temukan..."
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 outline-none focus:ring-4 focus:ring-cyan-100 focus:border-cyan-400 transition resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#031B63] hover:bg-blue-900 text-white py-5 rounded-2xl font-bold text-lg transition duration-300 shadow-xl"
              >
                Kirim Laporan Sekarang
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}
