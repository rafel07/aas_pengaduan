import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  date: string;
}

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("http://localhost:5000/api/auth/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (error) {
      console.error("Gagal mengambil data pengguna", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const addUser = async (user: Omit<User, "id" | "date" | "role">, role: string = "user") => {
    // Registrasi via backend sudah ada di Register.tsx.
    // Jika Super Admin bisa tambah user dari dashboard, bisa gunakan endpoint register.
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nama: user.name, email: user.email, password: "password123" }), // Default password for manually added users
      });
      if (response.ok) {
        fetchUsers();
      } else {
        alert("Gagal menambah pengguna");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { users, addUser, refreshUsers: fetchUsers };
}
