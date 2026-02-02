import express from "express";
import cors from "cors";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// health check (Railway test)
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// root check
app.get("/", (_req, res) => {
  res.send("Ultrafast Backend Running 🚀");
});

// IMPORTANT: Railway port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});