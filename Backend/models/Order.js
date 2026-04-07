import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  items: [
    {
      food: { type: mongoose.Schema.Types.ObjectId, ref: "FoodItem" },
      name:String,
      quantity: Number,
       price: Number,      // selling price at order time
       costPrice: Number
    }
  ],

  total: Number,

 status: {
  type: String,
  enum: ["Pending", "Preparing", "Delivered", "Cancelled"], // 🔥 ADD Preparing
  default: "Pending"
},

  createdAt: {
    type: Date,
    default: Date.now
  },

  // ✅ NEW FIELD (IMPORTANT)
  deliveredAt: {
    type: Date
  }
});

/**
 * ✅ TTL INDEX
 * Order will be auto-deleted
 * 5 days after deliveredAt
 */
orderSchema.index(
  { deliveredAt: 1 },
  { expireAfterSeconds: 60 * 60 * 24 * 5 } // 👉 5 days
);

// 👉 agar 7 din chahiye
// 60 * 60 * 24 * 7

export default mongoose.model("Order", orderSchema);
