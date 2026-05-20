import { useState } from "react";
import {
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";

const items = [
  {
    title: "Report",
    desc: "Reporting problems near you has never been this easy",
    icon: "📷",
  },
  {
    title: "News",
    desc: "Get latest public information and announcements",
    icon: "📰",
  },
  {
    title: "Public Transport",
    desc: "Track and access transportation services easily",
    icon: "🚌",
  },
  {
    title: "Healthcare Appointment",
    desc: "Book healthcare services quickly and safely",
    icon: "👨‍⚕️",
  },
  {
    title: "Taxes",
    desc: "Manage taxes digitally and transparently",
    icon: "🧾",
  },
];

export default function FeaturesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-[#f5f5f5] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div className="space-y-6">
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight">
              Layanan Utama & <br /> Fitur Unggulan
            </h2>
            <p className="text-lg text-gray-600">
              Nikmati kemudahan akses berbagai layanan publik dan pelaporan masalah di sekitar Anda dengan cepat, aman, dan transparan.
            </p>
          </div>

          {items.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-6"
            >
              <button
                onClick={() => setActive(index)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-5">

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-3xl">
                    {item.icon}
                  </div>

                  {/* Text */}
                  <div className="text-left">
                    <h1 className="text-2xl font-bold text-black">
                      {item.title}
                    </h1>

                    {active === index && (
                      <div className="mt-4">
                        <p className="text-4xl leading-tight font-semibold text-black max-w-xl">
                          {item.desc}
                        </p>

                        <button className="mt-8 text-blue-700 text-xl font-semibold flex items-center gap-3">
                          Know more →
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Arrow */}
                <div className="text-3xl">
                  {active === index ? (
                    <HiChevronUp />
                  ) : (
                    <HiChevronDown />
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
            alt="report"
            className="w-[500px] h-[650px] object-cover rounded-[30px] shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}