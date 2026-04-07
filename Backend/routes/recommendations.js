import express from "express";
import FoodItem from "../models/FoodItem.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const { search, calories, dietType, protein, fat, sugar } = req.query;

  // 1️⃣ STRICT QUERY
  let strictQuery = {};

  if (search) strictQuery.name = { $regex: search, $options: "i" };
  if (dietType) strictQuery.dietType = dietType;
  if (protein) strictQuery.protein = protein;
  if (fat) strictQuery.fat = fat;
  if (sugar) strictQuery.sugar = sugar;
  if (calories) strictQuery.calories = { $lte: Number(calories) };

  // 🔍 Strict search
  let foods = await FoodItem.find(strictQuery);

  // 2️⃣ RELAXED QUERY (agar kuch nahi mila)
  if (foods.length === 0) {
    let relaxedQuery = {};

    if (dietType) relaxedQuery.dietType = dietType;
    if (calories)
      relaxedQuery.calories = { $lte: Number(calories) + 150 };

    foods = await FoodItem.find(relaxedQuery).limit(2);
  }

  res.json(foods);
});



export default router;
