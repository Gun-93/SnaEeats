import express from "express";
import FoodItem from "../models/FoodItem.js";
import adminAuth from "../middleware/adminAuth.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const router = express.Router();

/* =======================
   USER ROUTES
   ======================= */

// ✅ USER: Get all menu items
router.get("/", async (req, res) => {
  const foods = await FoodItem.find().sort({ createdAt: -1 });
  res.json(foods);
});

/* =======================
   ADMIN ROUTES
   ======================= */

// ✅ ADMIN: Add food
router.post("/admin/add", adminAuth, upload.single("image"), async (req, res) => {
  try {
    // 🔥 ONLY CHANGE HERE
    const data = {
  name: req.body.name,
  price: req.body.price,
  costPrice: req.body.costPrice,
  calories: req.body.calories,
  protein: req.body.protein,
  carbs: req.body.carbs,
  fat: req.body.fat,
  diet: req.body.diet,
  foodType: req.body.foodType,
  image: req.file ? req.file.filename : "",
};

    const food = await FoodItem.create(data);

    res.status(201).json(food);
  } catch (err) {
    console.log("ERROR 👉", err); // helpful debug
    res.status(500).json({ message: err.message });
  }
});

// ✅ ADMIN: Update food
router.put("/admin/:id", adminAuth, async (req, res) => {
  try {
    const updatedFood = await FoodItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(updatedFood);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ✅ ADMIN: Delete food
router.delete("/admin/:id", adminAuth, async (req, res) => {
  try {
    await FoodItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Food deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;