require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const pengaduanRoutes = require("./routes/pengaduanRoutes");

const app = express();

app.use(cors());
app.use(express.json());


// folder upload
app.use(
  "/uploads",
  express.static("src/uploads")
);


// routes
app.use("/api/auth", authRoutes);

app.use(
  "/api/pengaduan",
  pengaduanRoutes
);


app.get("/", (req, res) => {
  res.send("API Running...");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});