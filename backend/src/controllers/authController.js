const db = require("../config/db");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// ================= REGISTER =================
exports.register = async (req, res) => {
  try {
    const { nama, email, password } = req.body;

    // cek email
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (result.length > 0) {
          return res.status(400).json({
            message: "Email sudah digunakan",
          });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // insert user
        db.query(
          "INSERT INTO users (nama, email, password) VALUES (?, ?, ?)",
          [nama, email, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).json({
                message: err.message,
              });
            }

            res.status(201).json({
              message: "Register berhasil",
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



// ================= LOGIN =================
exports.login = (req, res) => {
  try {
    const { email, password } = req.body;

    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }

        if (result.length === 0) {
          return res.status(404).json({
            message: "User tidak ditemukan",
          });
        }

        const user = result[0];

        // cek password
        const isMatch = await bcrypt.compare(
          password,
          user.password
        );

        if (!isMatch) {
          return res.status(400).json({
            message: "Password salah",
          });
        }

        // token
        const token = jwt.sign(
          {
            id: user.id,
            role: user.role,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1d",
          }
        );

        res.status(200).json({
          message: "Login berhasil",
          token,
          user: {
            id: user.id,
            nama: user.nama,
            email: user.email,
            role: user.role,
          },
        });
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};



// ================= GET PROFILE =================
exports.profile = (req, res) => {
  try {
    db.query(
      "SELECT id, nama, email, role FROM users WHERE id = ?",
      [req.user.id],
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
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


// ================= GET ALL USERS (SUPER ADMIN) =================
exports.getAllUsers = (req, res) => {
  try {
    // Ideally add super_admin role check here
    if (req.user.role !== "super_admin") {
      return res.status(403).json({
        message: "Akses ditolak",
      });
    }

    db.query(
      "SELECT id, nama as name, email, role FROM users ORDER BY id DESC",
      (err, result) => {
        if (err) {
          return res.status(500).json({
            message: err.message,
          });
        }
        
        // Map the result to include a dummy date or format created_at if it exists
        const formattedResult = result.map(user => ({
          ...user,
          date: new Date().toLocaleDateString("id-ID", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }) // Placeholder date since we don't know if created_at exists
        }));

        res.status(200).json(formattedResult);
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};