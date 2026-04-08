import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import menuRoutes from "./routes/menu.js";
import orderRoutes from "./routes/order.js";
import recommendationRoutes from "./routes/recommendations.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;






app.use(cors());   // ✅ YE ADD / REPLACE KAR

app.use(express.json());
/*
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3000","https://snnapeatss.netlify.app"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);
*/
app.use("/uploads", express.static("uploads"));




// ================= ROUTES =================
app.use("/api/auth", authRoutes);
app.use("/api/menu", menuRoutes);

// ✅ KEEP BOTH (VERY IMPORTANT)
app.use("/api/orders", orderRoutes); // correct



// 🔥 RECOMMENDATION ROUTE (ADD THIS)
app.use("/api/recommendations", recommendationRoutes);
// ================= HEALTH CHECK =================
app.get("/", (req, res) => res.send("SnapEats Backend Running"));

// ================= DB CONNECTION =================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ================= 404 HANDLER (ADD) =================
app.use((req, res) => {
  res.status(404).json({ message: "API route not found" });
});

// ================= GLOBAL ERROR HANDLER =================
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

// ================= START SERVER =================
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



