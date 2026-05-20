import { useState, useEffect } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  date: string;
}

const defaultUsers: User[] = [
  {
    id: "1",
    name: "Admin Pengaduan",
    email: "admin@example.com",
    role: "admin",
    date: "10 Mei 2026",
  },
  {
    id: "2",
    name: "Super Admin",
    email: "superadmin@example.com",
    role: "super_admin",
    date: "10 Mei 2026",
  },
  {
    id: "3",
    name: "Budi Santoso",
    email: "budi@example.com",
    role: "user",
    date: "11 Mei 2026",
  }
];

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("users_data");
    if (saved) {
      setUsers(JSON.parse(saved));
    } else {
      setUsers(defaultUsers);
      localStorage.setItem("users_data", JSON.stringify(defaultUsers));
    }
  }, []);

  const addUser = (user: Omit<User, "id" | "date" | "role">, role: string = "user") => {
    const saved = localStorage.getItem("users_data");
    let currentUsers = saved ? JSON.parse(saved) : defaultUsers;
    
    const newUser: User = {
      ...user,
      id: Date.now().toString(),
      role,
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const updated = [newUser, ...currentUsers];
    setUsers(updated);
    localStorage.setItem("users_data", JSON.stringify(updated));
  };

  return { users, addUser };
}
