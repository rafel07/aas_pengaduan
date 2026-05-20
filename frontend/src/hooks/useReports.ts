import { useState, useEffect } from "react";

export interface Report {
  id: string;
  title: string;
  category: string;
  status: string;
  date: string;
  description?: string;
}

const defaultReports: Report[] = [
  {
    id: "1",
    title: "Jalan Rusak di Kecamatan A",
    category: "Infrastruktur",
    status: "Diproses",
    date: "12 Mei 2026",
  },
  {
    id: "2",
    title: "Lampu Jalan Mati",
    category: "Fasilitas Umum",
    status: "Selesai",
    date: "10 Mei 2026",
  },
  {
    id: "3",
    title: "Sampah Menumpuk",
    category: "Lingkungan",
    status: "Pending",
    date: "8 Mei 2026",
  },
  {
    id: "4",
    title: "Drainase Tersumbat",
    category: "Lingkungan",
    status: "Diproses",
    date: "7 Mei 2026",
  },
];

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("laporan_data");
    if (saved) {
      setReports(JSON.parse(saved));
    } else {
      setReports(defaultReports);
      localStorage.setItem("laporan_data", JSON.stringify(defaultReports));
    }
  }, []);

  const addReport = (report: Omit<Report, "id" | "status" | "date">) => {
    const newReport: Report = {
      ...report,
      id: Date.now().toString(),
      status: "Pending",
      date: new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    };

    const updated = [newReport, ...reports];
    setReports(updated);
    localStorage.setItem("laporan_data", JSON.stringify(updated));
  };

  const updateStatus = (id: string, newStatus: string) => {
    const updated = reports.map((r) =>
      r.id === id ? { ...r, status: newStatus } : r
    );
    setReports(updated);
    localStorage.setItem("laporan_data", JSON.stringify(updated));
  };

  return { reports, addReport, updateStatus };
}
