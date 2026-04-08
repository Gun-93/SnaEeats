import { useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function AdminAddFood() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [costPrice, setCostPrice] = useState("");

  const token = localStorage.getItem("token");

  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbs, setCarbs] = useState("");
  const [fat, setFat] = useState("");

  // ✅ FIXED STATES
  const [diet, setDiet] = useState("");         // veg, vegan, keto
  const [foodType, setFoodType] = useState(""); // normal / diet

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!token) {
      alert("Please login as admin");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("price", price);
      formData.append("costPrice", costPrice);
      formData.append("calories", calories);
      formData.append("protein", protein);
      formData.append("carbs", carbs);
      formData.append("fat", fat);

      // ✅ FIXED FIELDS
      formData.append("diet", diet);
      formData.append("foodType", foodType);

      formData.append("image", image);

      await axios.post(
        "https://snaeeats.onrender.com/api/menu/admin/add",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Food added successfully");

      // reset
      setName("");
      setPrice("");
      setImage(null);
      setCalories("");
      setProtein("");
      setCarbs("");
      setFat("");
      setDiet("");
      setFoodType("");
    } catch (err) {
  console.log("ERROR 👉", err.response?.data);  // 👈 important
  alert(err.response?.data?.message || "Something went wrong");
}
  };

  return (
    <AdminLayout>
      <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold mt-12 mb-9 text-center">
            Add New Food
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg"
          >
            <input
              placeholder="Food name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded"
            />

            <input
              placeholder="Price"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded"
            />

            <input
              placeholder="Cost Price"
              type="number"
              value={costPrice}
              onChange={(e) => setCostPrice(e.target.value)}
              required
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded"
            />

            {/* Calories */}
            <select value={calories} onChange={(e) => setCalories(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Calories</option>
              <option value="100">100 kcal</option>
              <option value="200">200 kcal</option>
              <option value="300">300 kcal</option>
              <option value="400">400 kcal</option>
              <option value="500">500 kcal</option>
            </select>

            {/* Protein */}
            <select value={protein} onChange={(e) => setProtein(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Protein</option>
              <option value="30">30 g</option>
              <option value="50">50 g</option>
              <option value="70">70 g</option>
              <option value="100">100 g</option>
              <option value="120">120 g</option>
            </select>

            {/* Carbs */}
            <select value={carbs} onChange={(e) => setCarbs(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Carbs</option>
              <option value="50">50 g</option>
              <option value="100">100 g</option>
              <option value="150">150 g</option>
              <option value="200">200 g</option>
            </select>

            {/* Fat */}
            <select value={fat} onChange={(e) => setFat(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Fat</option>
              <option value="10">10 g</option>
              <option value="20">20 g</option>
              <option value="30">30 g</option>
              <option value="40">40 g</option>
            </select>

            {/* ✅ SELECT DIET (veg, vegan etc) */}
            <select value={diet} onChange={(e) => setDiet(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Diet</option>
              <option value="vegetarian">🥦 Vegetarian</option>
              <option value="non-vegetarian">🍗 Non-Vegetarian</option>
              <option value="vegan">🌱 Vegan</option>
              <option value="keto">🥑 Keto</option>
              <option value="low-carb">🍞 Low Carb</option>
              <option value="high-protein">💪 High Protein</option>
            </select>

            {/* ✅ SELECT TYPE (normal / diet food) */}
            <select value={foodType} onChange={(e) => setFoodType(e.target.value)} className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded">
              <option value="">Select Type</option>
              <option value="normal">Normal Food</option>
              <option value="diet">Diet Food</option>
            </select>

            {/* Image Upload */}
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white px-3 py-2 rounded"
            />

            <button
              type="submit"
              className="md:col-span-3 bg-red-600 hover:bg-red-700 text-white py-2 rounded font-semibold"
            >
              Add Food
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}