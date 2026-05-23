import { useState, useEffect } from "react";

export interface Report {
  id: string;
  title: string;
  category: string;
  status: string;
  date: string;
  description?: string;
  gambar?: string;
}

export function useReports() {
  const [reports, setReports] = useState<Report[]>([]);

  const fetchReports = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch("http://localhost:5000/api/pengaduan", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      if (response.ok) {
        // Backend returns: id, judul, deskripsi, gambar, status, user_id, nama
        // We map it to frontend expected format if needed
        const mappedData = data.map((item: any) => {
          const rawStatus = item.status || "pending";
          const capitalizedStatus = rawStatus.charAt(0).toUpperCase() + rawStatus.slice(1);
          return {
            id: item.id.toString(),
            title: item.judul,
            category: "Umum", // Backend might not have category, default to Umum
            status: capitalizedStatus,
            date: new Date().toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            }),
            description: item.deskripsi,
            gambar: item.gambar,
          };
        });
        setReports(mappedData);
      }
    } catch (error) {
      console.error("Gagal mengambil laporan", error);
    }
  };

  useEffect(() => {
    fetchReports();
  }, []);

  const addReport = async (payload: { title?: string, category: string, description: string, location?: string, phone?: string, image: File | null }) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("Anda harus login untuk membuat laporan.");
        return false;
      }

      const formData = new FormData();
      
      const judul = payload.title || `Laporan ${payload.category}${payload.location ? ` di ${payload.location}` : ""}`;
      let deskripsi = payload.description;
      if (payload.phone) {
        deskripsi = `No. HP: ${payload.phone}\n\n${deskripsi}`;
      }

      formData.append("judul", judul);
      formData.append("deskripsi", deskripsi);
      if (payload.image) {
        formData.append("gambar", payload.image);
      }

      const response = await fetch("http://localhost:5000/api/pengaduan", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (response.ok) {
        fetchReports(); // Refresh data
        return true;
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Gagal menambahkan laporan");
        return false;
      }
    } catch (error) {
      console.error(error);
      alert("Terjadi kesalahan jaringan");
      return false;
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const response = await fetch(`http://localhost:5000/api/pengaduan/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: newStatus.toLowerCase(),
        }),
      });

      if (response.ok) {
        fetchReports(); // Refresh data
      } else {
        alert("Gagal update status");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return { reports, addReport, updateStatus, refreshReports: fetchReports };
}
