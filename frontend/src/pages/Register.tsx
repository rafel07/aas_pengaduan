// ===============================
// src/pages/Register.tsx
// ===============================

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUsers } from "../hooks/useUsers";

import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineShieldCheck,
} from "react-icons/hi";

export default function Register() {

  const navigate = useNavigate();
  const { addUser } = useUsers();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();

    // simpan data ke daftar user
    addUser({ name, email });

    // simpan data user dummy ke localStorage untuk session
    localStorage.setItem("user", JSON.stringify({ name, email, role: "user" }));

    // pindah ke halaman home (langsung login)
    navigate("/home");
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#071B3B] via-[#0B2E68] to-[#06B6D4] flex items-center justify-center px-4 py-16">

      {/* BLUR */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-300/20 rounded-full blur-3xl"></div>

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      ></div>

      {/* CARD */}
      <div className="relative z-10 w-full max-w-5xl grid lg:grid-cols-2 overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.35)]">

        {/* LEFT */}
        <div className="hidden lg:flex flex-col justify-center p-14 relative overflow-hidden">

          <div className="absolute -top-10 -left-10 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl"></div>

          <div className="relative z-10">

            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/10 px-5 py-3 rounded-full mb-8">

              <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

              <span className="text-sm tracking-wide text-white">
                Join Our Community
              </span>

            </div>

            <h1 className="text-6xl font-black leading-tight text-white mb-8">

              Buat
              <span className="block bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent">

                Akun Baru

              </span>

            </h1>

            <p className="text-blue-100 text-lg leading-10 max-w-xl">

              Daftar sekarang untuk mulai mengirimkan laporan, memantau status pengaduan,
              dan berkontribusi dalam membangun lingkungan yang lebih baik.

            </p>

            <div className="mt-12 space-y-5">

              <div className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl px-5 py-4 backdrop-blur-xl">

                <div className="w-14 h-14 rounded-2xl bg-cyan-400/20 flex items-center justify-center text-cyan-300 text-3xl">

                  <HiOutlineShieldCheck />

                </div>

                <div>

                  <h2 className="text-xl font-bold text-white">
                    Privasi Terjamin
                  </h2>

                  <p className="text-blue-100">
                    Data pribadi Anda aman bersama kami
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="bg-white p-8 lg:p-14 flex flex-col justify-center h-full max-h-[90vh] overflow-y-auto">

          <div className="mb-8 mt-4 lg:mt-0">

            <h1 className="text-5xl font-black text-gray-800 mb-3">

              Register

            </h1>

            <p className="text-gray-500 text-lg">

              Buat akun baru PengaduanKu

            </p>

          </div>

          {/* FORM */}
          <form
            className="space-y-6"
            onSubmit={handleRegister}
          >

            {/* NAMA */}
            <div>

              <label className="block text-gray-700 font-bold mb-3">
                Nama Lengkap
              </label>

              <div className="relative">

                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-14 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />

                <HiOutlineUser className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

              </div>

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-gray-700 font-bold mb-3">
                Email
              </label>

              <div className="relative">

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Masukkan email"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-14 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />

                <HiOutlineMail className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

              </div>

            </div>

            {/* PASSWORD */}
            <div>

              <label className="text-gray-700 font-bold block mb-3">
                Password
              </label>

              <div className="relative">

                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Masukkan password"
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4 pr-14 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition"
                />

                <HiOutlineLockClosed className="absolute right-5 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />

              </div>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-5 rounded-2xl font-black text-lg shadow-[0_15px_40px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition duration-300"
            >

              <span className="relative z-10 flex items-center justify-center gap-3">

                Register Sekarang

                <span className="group-hover:translate-x-2 transition duration-300">
                  →
                </span>

              </span>

            </button>

          </form>

          {/* LOGIN */}
          <p className="text-center text-gray-500 mt-8 mb-4 lg:mb-0">

            Sudah punya akun?

            <Link
              to="/login"
              className="ml-2 text-blue-700 font-bold hover:text-cyan-500 transition"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}