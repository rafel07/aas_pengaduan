const express = require("express");

const router = express.Router();

const {
  register,
  login,
  profile,
  getAllUsers,
} = require("../controllers/authController");

const {
  verifyToken,
} = require("../middleware/authMiddleware");


// register
router.post("/register", register);

// login
router.post("/login", login);

// profile
router.get("/profile", verifyToken, profile);

// get all users (super admin only handled in controller)
router.get("/users", verifyToken, getAllUsers);

module.exports = router;