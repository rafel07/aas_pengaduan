import { useState } from "react";
import { useReports } from "../hooks/useReports";
import {
  HiOutlinePhotograph,
  HiOutlineLocationMarker,
  HiOutlineClipboardList,
  HiOutlineCheckCircle,
} from "react-icons/hi";

export default function ReportFormSection() {
  const { addReport } = useReports();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Infrastruktur");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !location) return; // name and phone are optional depending on requirement, but description/location are key

    const success = await addReport({
      title: "", // We let useReports construct this
      category,
      location,
      description,
      image,
    });

    if (success) {
      setIsSubmitted(true);
      setName("");
      setCategory("Infrastruktur");
      setLocation("");
      setDescription("");
      setImage(null);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="lapor" className="relative min-h-screen overflow-hidden bg-[#F4F7FB] py-24">
      {/* BACKGROUND */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 bg-cyan-100 text-cyan-700 px-6 py-3 rounded-full font-semibold mb-8">
            <div className="w-3 h-3 rounded-full bg-cyan-500 animate-pulse"></div>
            Layanan Pengaduan
          </div>

          <h2 className="text-5xl lg:text-7xl font-black text-[#031B63] leading-tight mb-8">
            Buat Pengaduan
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-700 bg-clip-text text-transparent">
              Secara Mudah
            </span>
          </h2>

          <p className="text-xl text-gray-600 leading-10">
            Laporkan masalah fasilitas umum, lingkungan,
            keamanan, atau pelayanan publik langsung dari
            perangkat Anda secara cepat dan transparan.
          </p>
        </div>

        {isSubmitted ? (
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-12 text-center shadow-lg border border-gray-100">
            <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-6xl mx-auto mb-8">
              <HiOutlineCheckCircle />
            </div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Pengaduan Berhasil Terkirim!</h3>
            <p className="text-gray-500 text-lg leading-relaxed">
              Terima kasih atas partisipasi Anda. Laporan Anda akan segera diproses oleh petugas. Anda dapat memantaunya di Dashboard.
            </p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT INFO */}
            <div className="space-y-6">
              {/* CARD 1 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-3xl mb-6">
                  <HiOutlineClipboardList />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Isi Data Pengaduan</h3>
                <p className="text-gray-600 leading-8">
                  Lengkapi detail laporan agar petugas dapat memproses pengaduan dengan lebih cepat.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                <div className="w-16 h-16 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-3xl mb-6">
                  <HiOutlineCheckCircle />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Diproses Otomatis</h3>
                <p className="text-gray-600 leading-8">
                  Laporan akan langsung diteruskan ke instansi terkait untuk diverifikasi dan ditindaklanjuti.
                </p>
              </div>
            </div>

            {/* FORM */}
            <div className="lg:col-span-2 bg-white rounded-[35px] p-8 lg:p-12 shadow-sm border border-gray-100">
              <h3 className="text-3xl font-bold text-[#031B63] mb-10">Form Pengaduan</h3>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* NAMA */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Nama Lengkap</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Masukkan nama lengkap"
                    className="w-full h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:border-cyan-400"
                  />
                </div>

                {/* KATEGORI */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Kategori Pengaduan</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full h-16 rounded-2xl border border-gray-200 px-6 outline-none focus:border-cyan-400"
                  >
                    <option value="Infrastruktur">Infrastruktur</option>
                    <option value="Lingkungan">Lingkungan</option>
                    <option value="Keamanan">Keamanan</option>
                    <option value="Fasilitas Umum">Fasilitas Umum</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* LOKASI */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Lokasi Kejadian</label>
                  <div className="relative">
                    <HiOutlineLocationMarker className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Masukkan lokasi kejadian"
                      className="w-full h-16 rounded-2xl border border-gray-200 pl-16 pr-6 outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                {/* DESKRIPSI */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Deskripsi Pengaduan</label>
                  <textarea
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={6}
                    placeholder="Tuliskan detail pengaduan..."
                    className="w-full rounded-2xl border border-gray-200 p-6 outline-none resize-none focus:border-cyan-400"
                  ></textarea>
                </div>

                {/* UPLOAD */}
                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Upload Foto</label>
                  <label className="border-2 border-dashed border-cyan-300 bg-cyan-50 rounded-3xl h-[220px] flex flex-col items-center justify-center text-center cursor-pointer hover:bg-cyan-100 transition overflow-hidden relative">
                    {image ? (
                      <div className="absolute inset-0 w-full h-full">
                        <img src={URL.createObjectURL(image)} alt="Preview" className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition text-white font-semibold">
                          Ganti Foto
                        </div>
                      </div>
                    ) : (
                      <>
                        <HiOutlinePhotograph className="text-6xl text-cyan-500 mb-4" />
                        <h4 className="text-2xl font-bold text-gray-800">Upload Bukti Foto</h4>
                        <p className="text-gray-500 mt-2">PNG, JPG atau JPEG</p>
                      </>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) setImage(e.target.files[0]);
                      }}
                      className="hidden"
                    />
                  </label>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full h-16 rounded-2xl bg-[#031B63] hover:bg-[#04207a] text-white text-xl font-semibold transition"
                >
                  Kirim Pengaduan
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
