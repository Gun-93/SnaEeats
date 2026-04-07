import mongoose from "mongoose";

const foodItemSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    type: String,
    price: { type: Number, required: true },
    dietType: String, 
    costPrice: { type: Number, required: true }, // ✅ FIX
    protein: String,
    carbs: String,
    fat: String,
    description: String,
    sugar: String,   
    image: String,
    diet: String,
foodType: String,
  },
  {
    timestamps: true, // ✅ MUST be INSIDE schema options
  }
);

export default mongoose.model("FoodItem", foodItemSchema);
