// ===============================
// src/components/Navbar.tsx
// ===============================

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import {
  HiBars3,
} from "react-icons/hi2";

import {
  HiOutlineGlobeAlt,
  HiChevronDown,
} from "react-icons/hi";

interface NavbarProps {
  showLogin?: boolean;
}

export default function Navbar({ showLogin = true }: NavbarProps) {

  const location = useLocation();
  const [user, setUser] = useState<{name: string, email: string} | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/";
  };

  const menus = [
    {
      name: "Features",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Help Center",
      path: "/help",
    },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#031B63]"
    >

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between">

        {/* LEFT */}
        <div className="flex items-center gap-20">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >

            <div className="w-3 h-3 rounded-full bg-cyan-400 mb-5"></div>

            <h1 className="text-[42px] leading-none font-extrabold text-white tracking-tight">
              Depok Kini
            </h1>

          </Link>

          {/* MENU */}
          <div className="hidden lg:flex items-center gap-14">

            {menus.map((menu, index) => (

              <Link
                key={index}
                to={menu.path}
                className={`relative text-lg font-medium pb-3 transition ${
                  location.pathname === menu.path
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }`}
              >

                {menu.name}

                {location.pathname === menu.path && (
                  <div className="absolute left-0 bottom-0 w-full h-[2px] bg-cyan-400"></div>
                )}

              </Link>

            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex items-center gap-8">

          {/* Language */}
          <button className="flex items-center gap-3 text-white hover:text-cyan-300 transition">

            <HiOutlineGlobeAlt className="text-xl" />

            <span className="text-lg font-medium">
              English
            </span>

            <HiChevronDown className="text-lg" />

          </button>

          {/* Profile or Login */}
          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded-full transition"
              >
                <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-[#031B63] font-bold">
                  {user.name.charAt(0)}
                </div>
                <span className="text-white font-medium">{user.name}</span>
                <HiChevronDown className="text-white" />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-xl py-2 z-50">
                  <Link
                    to="/dashboard"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 font-medium"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 font-medium"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            showLogin && (
              <Link
                to="/login"
                className="bg-cyan-400 hover:bg-cyan-300 text-[#031B63] px-8 py-3 rounded-full font-semibold text-lg transition"
              >
                Login
              </Link>
            )
          )}

        </div>

        {/* MOBILE */}
        <button className="lg:hidden text-white text-4xl">

          <HiBars3 />

        </button>

      </div>

    </motion.nav>
  );
}