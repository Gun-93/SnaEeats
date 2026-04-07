import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// ================= SIGNUP =================
router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "Email already registered" });

    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign(
  { id: user._id, isAdmin: user.isAdmin },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);


    // ✅ CONSISTENT RESPONSE
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin || false,
      token
    });

  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= LOGIN =================
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await user.comparePassword(password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid email or password" });

   const token = jwt.sign(
  { id: user._id, isAdmin: user.isAdmin },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

    // ✅ 🔥 VERY IMPORTANT RESPONSE
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin || false,
      token
    });

  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// ================= AUTH MIDDLEWARE =================
export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token)
    return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};

// ================= PROFILE =================
router.get("/profile", authMiddleware, async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.status(200).json(user);
});

export default router;



