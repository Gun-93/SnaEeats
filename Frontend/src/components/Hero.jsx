import React, { useState } from "react";
import { MdLocationOn, MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import bg from "../assets/food.jpg";
export default function Hero() {
  const navigate = useNavigate();

  // 🔹 Existing states (UNCHANGED)
  const [location, setLocation] = useState("");
  const [food, setFood] = useState("");

  // 🔥 Dietary states
  const [calories, setCalories] = useState("");
  const [dietType, setDietType] = useState("");
  const [goal, setGoal] = useState("");
  const [protein, setProtein] = useState("");
  const [fat, setFat] = useState("");
  const [sugar, setSugar] = useState("");
  const [avoid, setAvoid] = useState("");
  const [dietFood, setDietFood] = useState("");
  

  const [mealSize, setMealSize] = useState("");

  const getCaloriesFromMealSize = () => {
    if (mealSize === "Light") return 300;
    if (mealSize === "Regular") return 500;
    if (mealSize === "Heavy") return 800;
    return "";
  };

  const handleSearch = (e) => {
  e.preventDefault();

  navigate(
    `/recommendations?search=${food}&location=${location}`
  );
};


 const handleDietSearch = () => {
  navigate(
    `/recommendations?calories=${calories}&dietType=${dietType}&goal=${goal}&protein=${protein}&fat=${fat}&sugar=${sugar}&avoid=${avoid}&search=${dietFood}`
  );
};


  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="
  relative
  bg-white/90 dark:bg-gray-900/90
  p-8 rounded-xl
  text-gray-800 dark:text-gray-100
">


        {/* ================= SEARCH SECTION ================= */}
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-3 text-red-600">
            Delicious Food Delivered To You
          </h1>
          <p className="text-gray-600 mb-6">
            Order food or get smart dietary recommendations
          </p>

          <form
            onSubmit={handleSearch}
            className="flex flex-col sm:flex-row gap-4"
          >
           

            <div className="relative flex-1">
              <MdSearch className="absolute right-3 top-3 text-gray-500" />
              <input
                type="text"
                placeholder="Search food item"
                value={food}
                onChange={(e) => setFood(e.target.value)}
                 className="
  w-full
  h-14
  px-6
  rounded-xl
  border
  border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-900
  text-gray-800 dark:text-white
  placeholder-gray-500 dark:placeholder-gray-400
  focus:outline-none
  focus:ring-2
  focus:ring-green-500
"
              />
            </div>

            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
              Search
            </button>
          </form>
        </div>

        {/* ================= DIETARY SECTION ================= */}
       {/* ================= DIETARY SECTION ================= */}
<div className="border-t pt-6">
  <h2 className="text-2xl font-bold text-center text-red-600 dark:text-red-500">
    Personalized Dietary Recommendation
  </h2>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

  {/* 🔍 DIET SEARCH – FULL WIDTH */}
  <div className="md:col-span-3">
    <input
      type="text"
      placeholder="Search food for diet (e.g. cake)"
      className="
  w-full
  h-14
  px-6
  rounded-xl
  border
  border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-900
  text-gray-800 dark:text-white
  placeholder-gray-500 dark:placeholder-gray-400
  focus:outline-none
  focus:ring-2
  focus:ring-green-500
"

    />
  </div>
   <select
              value={mealSize}
              onChange={(e) => setMealSize(e.target.value)}
              className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

            >
              <option value="" disabled>Select Meal Size</option>
              <option value="Light">🥗 Light Meal</option>
              <option value="Regular">🍛 Regular Meal</option>
              <option value="Heavy">🍔 Heavy Meal</option>
            </select>

    {/* Diet */}
    <select
      value={dietType}
      onChange={(e) => setDietType(e.target.value)}
      className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

    >
      <option value="" disabled>
        Select Diet
      </option>
      <option value="Vegetarian">🥒Vegetarian</option>
      <option value="Non-Vegetarian">🍗Non-Vegetarian</option>
      <option value="Vegan">🍆Vegan</option>
      <option value="Keto">🍠Keto</option>
      <option value="Low Carb">🍌Low Carb</option>
    </select>

    {/* Goal */}
    <select
      value={goal}
      onChange={(e) => setGoal(e.target.value)}
      className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

    >
      <option value="" disabled>
        Select Goal
      </option>
      <option value="Weight Loss">🏋️Weight Loss</option>
      <option value="Muscle Gain">💪Muscle Gain</option>
      <option value="Normal">⚖️Normal</option>
    </select>

    

    {/* Fat */}
    <select
      value={fat}
      onChange={(e) => setFat(e.target.value)}
      className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

    >
      <option value="" disabled>
        Select Fat Level
      </option>
      <option value="Low Fat">⛹️Low Fat</option>
      <option value="Medium Fat">⛹️‍♀️Medium Fat</option>
    </select>

    {/* Sugar */}
    <select
      value={sugar}
      onChange={(e) => setSugar(e.target.value)}
      className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

    >
      <option value="" disabled>
        Select Sugar Level
      </option>
      <option value="Low Sugar">🥚Low Sugar</option>
      <option value="No Sugar">🍳No Sugar</option>
    </select>

    {/* Avoid */}
    <input
      type="text"
      placeholder="Avoid ingredients (e.g. sugar, cheese)"
      value={avoid}
      onChange={(e) => setAvoid(e.target.value)}
      className="
  border border-gray-300 dark:border-gray-700
  bg-white dark:bg-gray-800
  text-gray-800 dark:text-gray-100
  placeholder-gray-500 dark:placeholder-gray-400
  rounded-lg px-4 py-2
  focus:outline-none focus:ring-2 focus:ring-green-500
"

    />
  </div>

  <button
    onClick={handleDietSearch}
    className="mt-5 w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
  >
    Get Smart Food Recommendations
  </button>
</div>


      </div>
    </section>
  );
}
