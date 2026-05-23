const express = require("express");

const router = express.Router();

const {
  createPengaduan,
  getPengaduan,
  getDetailPengaduan,
  updatePengaduan,
  deletePengaduan,
} = require("../controllers/pengaduanController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");


// create
router.post(
  "/",
  verifyToken,
  upload.single("gambar"),
  createPengaduan
);

// get all
router.get(
  "/",
  verifyToken,
  getPengaduan
);

// detail
router.get(
  "/:id",
  verifyToken,
  getDetailPengaduan
);

// update
router.put(
  "/:id",
  verifyToken,
  upload.single("gambar"),
  updatePengaduan
);

// delete
router.delete(
  "/:id",
  verifyToken,
  deletePengaduan
);

module.exports = router;