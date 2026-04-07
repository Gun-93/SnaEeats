import Order from "../models/Order.js";
import FoodItem from "../models/FoodItem.js";

export const createOrder = async (req, res) => {
  try {
    const { user, items } = req.body;

    let orderItems = [];
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      const food = await FoodItem.findById(items[i].food);

      if (!food) continue;

      const quantity = items[i].quantity;

      orderItems.push({
        food: food._id,
        name: food.name,          // ✅ IMPORTANT
        quantity,
        price: food.price,        // ✅ IMPORTANT
        costPrice: food.costPrice // ✅ IMPORTANT
      });

      total += food.price * quantity;
    }

    const order = await Order.create({
      user,
      items: orderItems,
      total,
      status: "Pending"
    });

    res.status(201).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Order creation failed" });
  }
};




// ✅ MARK ORDER AS DELIVERED
export const markOrderDelivered = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    order.status = "Delivered";
    order.deliveredAt = new Date(); // 🔥 TTL trigger

    await order.save();

    res.json({
      message: "Order marked as Delivered",
      order
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
export const updateOrderStatus = async (req, res) => {
  try {
    console.log("BODY 👉", req.body);  // 🔥 DEBUG

    const { id } = req.params;
    const { status } = req.body;

    // ✅ FIX 1: check status
    if (!status) {
      return res.status(400).json({ message: "Status missing" });
    }

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // ✅ FIX 2: prevent changing delivered
    if (order.status === "Delivered") {
      return res.status(400).json({ message: "Already delivered" });
    }

    order.status = status;

    await order.save();

    res.json({ message: "Order updated", order });

  } catch (error) {
    console.error("ERROR 👉", error);   // 🔥 IMPORTANT
    res.status(500).json({ message: "Server error" });
  }
};
/**
 * ✅ ADMIN: Profit / Loss Report
 */

export const getProfitLossReport = async (req, res) => {
  try {
    const deliveredOrders = await Order.find({
  status: { $in: ["Delivered", "Preparing"] }  // 🔥 FIX
})
.populate("items.food");

    let totalRevenue = 0;
    let totalCost = 0;
    let itemsBreakdown = [];

    deliveredOrders.forEach(order => {
      order.items.forEach(item => {

        const qty = item.quantity || 0;

        // ✅ NAME
        const name =
          item.name ||
          item.food?.name ||
          "Unknown Item";

        // ✅ SELL PRICE (THIS FIXES ₹ blank)
        const sellPrice =
          item.price ??
          item.food?.price ??
          0;

        // ✅ COST PRICE (THIS FIXES Not recorded)
        const costPrice =
          item.costPrice ??
          item.food?.costPrice ??
          item.food?.costprice ?? // 🔥 ADD THIS
          0;

        const revenue = sellPrice * qty;
        const costTotal = costPrice * qty;
        const profit = revenue - costTotal;

        totalRevenue += revenue;
        totalCost += costTotal;

        itemsBreakdown.push({
          name,
          quantity: qty,
          sellPrice,
          costPrice,
          profit,
        });
      });
    });

    res.status(200).json({
      totalRevenue,
      totalCost,
      profit: totalRevenue - totalCost,
      items: itemsBreakdown,
    });

  } catch (err) {
    console.error("Profit/Loss Error:", err);
    res.status(500).json({ message: "Profit/Loss failed" });
  }
};
