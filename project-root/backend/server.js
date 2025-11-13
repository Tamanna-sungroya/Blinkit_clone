// backend/server.js
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import cartRoutes from "./routes/cartRoutes.js";
import connectDB from "./config/db.js";
import paymentRoutes from "/routes/paymentRoutes.js";


dotenv.config();

const app = express();
app.use(express.json());

// Connect MongoDB
connectDB();

// API Routes (cart API ke liye prefix lagao)
app.use("/api/cart", cartRoutes);

app.use("/api", paymentRoutes);

// ------------------ React Frontend Serve ------------------ //
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  // React build serve karo
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // React Router ke liye SPA fallback
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../frontend/build", "index.html"))
  );
} else {
  // Dev mode test route
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}
// ---------------------------------------------------------- //

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});