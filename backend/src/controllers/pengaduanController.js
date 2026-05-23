const db = require("../config/db");


// ================= TAMBAH LAPORAN =================
exports.createPengaduan = (req, res) => {
  try {
    const { judul, deskripsi } = req.body;

    const gambar = req.file
      ? req.file.filename
      : null;

    db.query(
      `
      INSERT INTO pengaduan 
      (user_id, judul, deskripsi, gambar)
      VALUES (?, ?, ?, ?)
      `,
      [
        req.user.id,
        judul,
        deskripsi,
        gambar,
      ],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        res.status(201).json({
          message: "Pengaduan berhasil dibuat",
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// ================= GET SEMUA LAPORAN =================
exports.getPengaduan = (req, res) => {
  try {
    let query = `
      SELECT 
        pengaduan.*,
        users.nama
      FROM pengaduan
      JOIN users ON pengaduan.user_id = users.id
    `;

    // jika user biasa
    if (!["admin", "super_admin"].includes(req.user.role)) {
      query += ` WHERE pengaduan.user_id = ${req.user.id}`;
    }

    query += ` ORDER BY pengaduan.id DESC`;

    db.query(query, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: err.message,
        });
      }

      res.status(200).json(result);
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// ================= DETAIL LAPORAN =================
exports.getDetailPengaduan = (req, res) => {
  try {
    const { id } = req.params;

    db.query(
      `
      SELECT 
        pengaduan.*,
        users.nama
      FROM pengaduan
      JOIN users ON pengaduan.user_id = users.id
      WHERE pengaduan.id = ?
      `,
      [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            message: "Pengaduan tidak ditemukan",
          });
        }

        res.status(200).json(result[0]);
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// ================= UPDATE LAPORAN =================
exports.updatePengaduan = (req, res) => {
  try {
    const { id } = req.params;

    const { judul, deskripsi, status } =
      req.body;

    db.query(
      `
      SELECT * FROM pengaduan
      WHERE id = ?
      `,
      [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            message: "Pengaduan tidak ditemukan",
          });
        }

        const laporan = result[0];

        // cek kepemilikan
        if (
          !["admin", "super_admin"].includes(req.user.role) &&
          laporan.user_id !== req.user.id
        ) {
          return res.status(403).json({
            message: "Akses ditolak",
          });
        }

        const gambar = req.file
          ? req.file.filename
          : laporan.gambar;

        db.query(
          `
          UPDATE pengaduan
          SET
            judul = ?,
            deskripsi = ?,
            gambar = ?,
            status = ?
          WHERE id = ?
          `,
          [
            judul,
            deskripsi,
            gambar,
            status || laporan.status,
            id,
          ],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                message: err.message,
              });
            }

            res.status(200).json({
              message: "Pengaduan berhasil diupdate",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// ================= HAPUS LAPORAN =================
exports.deletePengaduan = (req, res) => {
  try {
    const { id } = req.params;

    db.query(
      `
      SELECT * FROM pengaduan
      WHERE id = ?
      `,
      [id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            message: "Pengaduan tidak ditemukan",
          });
        }

        const laporan = result[0];

        // cek owner/admin
        if (
          !["admin", "super_admin"].includes(req.user.role) &&
          laporan.user_id !== req.user.id
        ) {
          return res.status(403).json({
            message: "Akses ditolak",
          });
        }

        db.query(
          `
          DELETE FROM pengaduan
          WHERE id = ?
          `,
          [id],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                message: err.message,
              });
            }

            res.status(200).json({
              message: "Pengaduan berhasil dihapus",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};