import express from "express";
import Order from "../models/Order.js";
import adminAuth from "../middleware/adminAuth.js";

import {
  createOrder,
  updateOrderStatus,   // 🔥 ADD THIS
  getProfitLossReport
} from "../controllers/orderController.js";
const router = express.Router();

/* ========= USER ========= */
router.post("/", createOrder);

/* ========= ADMIN (ALWAYS ABOVE :userId) ========= */
router.get("/profit-loss", adminAuth, getProfitLossReport);

router.get("/admin/all", adminAuth, async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("items.food");
  res.json(orders);
});

router.put("/admin/:id", adminAuth, updateOrderStatus);

/* ========= USER ORDERS (LAST) ========= */
router.get("/:userId", async (req, res) => {
  const orders = await Order.find({ user: req.params.userId })
    .populate("items.food");
  res.json(orders);
});

export default router;
