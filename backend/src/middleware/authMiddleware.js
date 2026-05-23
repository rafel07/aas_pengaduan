const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "Token tidak ada",
      });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(
      token,
      process.env.JWT_SECRET,
      (err, decoded) => {
        if (err) {
          return res.status(403).json({
            message: "Token invalid",
          });
        }

        req.user = decoded;

        next();
      }
    );
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};


// ================= ADMIN ONLY =================
exports.isAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Akses admin ditolak",
    });
  }

  next();
};