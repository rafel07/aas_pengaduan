// ==========================================
// src/pages/Dashboard.tsx
// ==========================================

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineUsers,
  HiOutlineCog,
  HiOutlineBell,
  HiOutlineSearch,
  HiOutlineLogout,
  HiOutlineChartBar,
  HiOutlineCheckCircle,
  HiOutlineClock,
  HiOutlineExclamationCircle,
  HiMenu,
} from "react-icons/hi";



import { useReports } from "../hooks/useReports";
import { useUsers } from "../hooks/useUsers";

export default function SuperAdmin() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const { reports, updateStatus } = useReports();
  const { users } = useUsers();
  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("user");
    if (userStr) {
      const user = JSON.parse(userStr);
      setCurrentUser(user);
      if (user.role !== "super_admin") {
        navigate("/login");
      }
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const isSuperAdmin = currentUser?.role === "super_admin";

  const stats = [
    {
      title: "Total Laporan",
      value: reports.length.toString(),
      icon: <HiOutlineClipboardList />,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Diproses",
      value: reports.filter((r) => r.status === "Diproses").length.toString(),
      icon: <HiOutlineClock />,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Selesai",
      value: reports.filter((r) => r.status === "Selesai").length.toString(),
      icon: <HiOutlineCheckCircle />,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Pending",
      value: reports.filter((r) => r.status === "Pending").length.toString(),
      icon: <HiOutlineExclamationCircle />,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex overflow-hidden">

      {/* ================= SIDEBAR ================= */}
      <aside className="hidden lg:flex flex-col justify-between w-[280px] bg-[#031B63] text-white p-8">

        <div>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-14">

            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>

            <h1 className="text-4xl font-extrabold tracking-tight">
              jaki
            </h1>

          </div>

          {/* MENU */}
          <div className="space-y-3">

            <button
              onClick={() => setActiveMenu("Dashboard")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition ${
                activeMenu === "Dashboard"
                  ? "bg-cyan-400 text-[#031B63] font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              <HiOutlineHome className="text-2xl" />
              Dashboard
            </button>

            <button
              onClick={() => setActiveMenu("Laporan")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition ${
                activeMenu === "Laporan"
                  ? "bg-cyan-400 text-[#031B63] font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              <HiOutlineClipboardList className="text-2xl" />
              Laporan
            </button>

            {isSuperAdmin && (
              <button
                onClick={() => setActiveMenu("Pengguna")}
                className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition ${
                  activeMenu === "Pengguna"
                    ? "bg-cyan-400 text-[#031B63] font-semibold"
                    : "hover:bg-white/10"
                }`}
              >
                <HiOutlineUsers className="text-2xl" />
                Pengguna
              </button>
            )}

            <button
              onClick={() => setActiveMenu("Statistik")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition ${
                activeMenu === "Statistik"
                  ? "bg-cyan-400 text-[#031B63] font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              <HiOutlineChartBar className="text-2xl" />
              Statistik
            </button>

            <button
              onClick={() => setActiveMenu("Pengaturan")}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition ${
                activeMenu === "Pengaturan"
                  ? "bg-cyan-400 text-[#031B63] font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              <HiOutlineCog className="text-2xl" />
              Pengaturan
            </button>

          </div>

        </div>

        {/* PROFILE */}
        <div className="bg-white/10 rounded-3xl p-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-cyan-400 flex items-center justify-center text-[#031B63] text-2xl font-black flex-shrink-0">
              {(currentUser?.name || "A")[0].toUpperCase()}
            </div>

            <div className="overflow-hidden">
              <h1 className="font-semibold text-lg truncate">
                {currentUser?.name || "Admin"}
              </h1>

              <p className="text-blue-100 text-sm">
                {currentUser?.role === "super_admin" ? "Super Administrator" : "Administrator"}
              </p>
            </div>

          </div>

          <button onClick={handleLogout} className="mt-5 w-full bg-white/10 hover:bg-white/20 transition rounded-2xl py-3 flex items-center justify-center gap-3 font-medium">
            <HiOutlineLogout />
            Logout
          </button>

        </div>

      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-5 lg:p-10 overflow-y-auto">

        {/* MOBILE TOPBAR */}
        <div className="lg:hidden flex items-center justify-between mb-6">

          <button className="w-12 h-12 rounded-2xl bg-[#031B63] text-white flex items-center justify-center text-2xl">
            <HiMenu />
          </button>

          <h1 className="text-2xl font-bold text-[#031B63]">
            {activeMenu}
          </h1>

          <button className="w-12 h-12 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl relative">
            <HiOutlineBell />

            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500"></div>
          </button>

        </div>

        {/* TOPBAR */}
        <div className="bg-white rounded-3xl border border-gray-100 p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 shadow-sm">

          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              {activeMenu}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Monitoring laporan masyarakat secara real-time.
            </p>
          </div>

          <div className="flex items-center gap-4 flex-wrap">

            {/* SEARCH */}
            <div className="relative">

              <HiOutlineSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />

              <input
                type="text"
                placeholder="Cari laporan..."
                className="pl-14 pr-5 py-4 rounded-2xl border border-gray-200 outline-none w-[300px]"
              />

            </div>

            {/* NOTIF */}
            <button className="w-14 h-14 rounded-2xl border border-gray-200 flex items-center justify-center text-2xl bg-white hover:bg-gray-100 transition relative">

              <HiOutlineBell />

              <div className="absolute top-3 right-3 w-3 h-3 rounded-full bg-red-500"></div>

            </button>

          </div>

        </div>

        {/* ================= CONTENT ================= */}

        {activeMenu === "Dashboard" && (
          <>
            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">

              {stats.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl border border-gray-100 p-7 shadow-sm"
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-gray-500 text-lg">
                        {item.title}
                      </p>

                      <h1 className="text-4xl font-bold text-gray-900 mt-3">
                        {item.value}
                      </h1>

                    </div>

                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${item.color}`}>
                      {item.icon}
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* ACTIVITY */}
            <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm mt-8">

              <h1 className="text-2xl font-bold text-gray-900 mb-8">
                Aktivitas Terbaru
              </h1>

              <div className="space-y-7">

                {reports.slice(0, 5).map((report, idx) => (
                  <div className="flex gap-4" key={idx}>
                    <div className={`w-4 h-4 rounded-full mt-2 ${
                      report.status === 'Selesai' ? 'bg-green-400' :
                      report.status === 'Diproses' ? 'bg-yellow-400' :
                      'bg-red-400'
                    }`}></div>

                    <div>
                      <h2 className="font-semibold text-gray-800">
                        {report.title}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        Kategori: {report.category} - Status: {report.status}
                      </p>
                    </div>
                  </div>
                ))}
                
                {reports.length === 0 && (
                  <p className="text-gray-500 italic">Belum ada laporan.</p>
                )}

              </div>

            </div>
          </>
        )}

        {/* ================= LAPORAN ================= */}

        {activeMenu === "Laporan" && (
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm mt-8 overflow-x-auto">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Data Laporan
                </h1>

                <p className="text-gray-500 mt-1">
                  Daftar laporan terbaru masyarakat.
                </p>
              </div>

              <button className="bg-cyan-400 hover:bg-cyan-300 transition text-[#031B63] px-6 py-3 rounded-2xl font-semibold">
                Tambah Data
              </button>

            </div>

            <table className="w-full min-w-[800px]">

              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-5">Judul</th>
                  <th className="pb-5">Kategori</th>
                  <th className="pb-5">Status</th>
                  <th className="pb-5">Tanggal</th>
                  <th className="pb-5">Aksi</th>
                </tr>
              </thead>

              <tbody>

                {reports.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100"
                  >

                    <td className="py-6 font-semibold text-gray-800">
                      {item.title}
                    </td>

                    <td className="py-6 text-gray-600">
                      {item.category}
                    </td>

                    <td className="py-6">

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          item.status === "Selesai"
                            ? "bg-green-100 text-green-600"
                            : item.status === "Diproses"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {item.status}
                      </span>

                    </td>

                    <td className="py-6 text-gray-600">
                      {item.date}
                    </td>

                    <td className="py-6">

                      <select
                        value={item.status}
                        onChange={(e) => updateStatus(item.id, e.target.value)}
                        className="text-sm font-medium border border-gray-200 rounded-lg px-2 py-1 outline-none bg-white"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Diproses">Diproses</option>
                        <option value="Selesai">Selesai</option>
                      </select>

                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>
        )}

        {/* ================= PENGGUNA ================= */}

        {activeMenu === "Pengguna" && isSuperAdmin && (
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 mt-8 overflow-x-auto">

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                Data Pengguna
              </h1>
              <p className="text-gray-500">
                Daftar semua pengguna yang terdaftar di sistem.
              </p>
            </div>

            <table className="w-full min-w-[800px]">
              <thead>
                <tr className="border-b border-gray-200 text-left text-gray-500">
                  <th className="pb-5">Nama</th>
                  <th className="pb-5">Email</th>
                  <th className="pb-5">Role</th>
                  <th className="pb-5">Tanggal Daftar</th>
                </tr>
              </thead>
              <tbody>
                {users.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100">
                    <td className="py-6 font-semibold text-gray-800">
                      {item.name}
                    </td>
                    <td className="py-6 text-gray-600">
                      {item.email}
                    </td>
                    <td className="py-6">
                      <span
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          item.role === "super_admin"
                            ? "bg-purple-100 text-purple-600"
                            : item.role === "admin"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {item.role}
                      </span>
                    </td>
                    <td className="py-6 text-gray-600">
                      {item.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        )}

        {/* ================= STATISTIK ================= */}

        {activeMenu === "Statistik" && (
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 mt-8">

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Statistik
            </h1>

            <p className="text-gray-500">
              Halaman statistik berhasil dibuka.
            </p>

          </div>
        )}

        {/* ================= PENGATURAN ================= */}

        {activeMenu === "Pengaturan" && (
          <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 mt-8">

            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Pengaturan
            </h1>

            <p className="text-gray-500">
              Halaman pengaturan berhasil dibuka.
            </p>

          </div>
        )}

      </main>

    </div>
  );
}