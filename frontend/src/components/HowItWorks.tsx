import {
  HiOutlinePencilAlt,
  HiOutlineCheckCircle,
  HiOutlineCog,
  HiOutlineFlag,
} from "react-icons/hi";

const steps = [
  {
    title: "1. Tulis Laporan",
    description: "Tuliskan keluhan atau aspirasi Anda beserta bukti foto dan detail lokasi dengan jelas.",
    icon: <HiOutlinePencilAlt className="w-8 h-8" />,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "2. Proses Verifikasi",
    description: "Laporan akan divalidasi oleh sistem dan petugas kami untuk memastikan kebenarannya.",
    icon: <HiOutlineCheckCircle className="w-8 h-8" />,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "3. Tindak Lanjut",
    description: "Instansi terkait akan menerima laporan, menindaklanjuti, dan menyelesaikan masalah Anda.",
    icon: <HiOutlineCog className="w-8 h-8" />,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "4. Selesai",
    description: "Anda akan mendapatkan notifikasi bahwa laporan telah berhasil ditangani dan diselesaikan.",
    icon: <HiOutlineFlag className="w-8 h-8" />,
    color: "bg-green-100 text-green-600",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Bagaimana Cara Kerjanya?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proses pelaporan yang sangat mudah, transparan, dan dapat dipantau langsung perkembangannya dari layar Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-50 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-sm ${step.color}`}
              >
                {step.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
