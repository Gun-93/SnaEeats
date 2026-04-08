import React, { useState, useEffect } from "react";
import axios from "axios";

// --- Import images ---
import pizza from "../assets/paneer-pizza.jpg";
import burger from "../assets/veggie-burger.jpg";
import samosa from "../assets/samosa.jpg";
import springRolls from "../assets/spring-rolls.jpg";
import garlicBread from "../assets/garlic-bread.jpg";
import butterChicken from "../assets/butter-chicken.jpg";
import biryaniVeg from "../assets/veg-biryani.jpg";
import biryaniChicken from "../assets/chicken-biryani.jpg";
import palakPaneer from "../assets/palak-paneer.jpg";
import dalTadka from "../assets/dal-tadka.jpg";
import choleBhature from "../assets/chole-bhature.jpg";
import noodles from "../assets/noodles.jpg";
import friedRice from "../assets/fried-rice.jpg";
import gulabJamun from "../assets/gulab-jamun.jpg";
import iceCream from "../assets/ice-cream.jpg";
import cheesecake from "../assets/cheesecake.jpg";
import brownie from "../assets/brownie.jpg";
import rasgulla from "../assets/rasgulla.jpg";
import mojito from "../assets/mojito.jpg";
import chai from "../assets/chai.jpg";
import coldCoffee from "../assets/cold-coffee.jpg";
import mangoShake from "../assets/mango-shake.jpg";
import orangeJuice from "../assets/orange-juice.jpg";
import hotChocolate from "../assets/hot-chocolate.jpg";
import paneertikka from "../assets/paneer-tikka.jpg";
import rasmalai from "../assets/rasmalai.jpg";
import chickenmanchurian from "../assets/chicken-manchurian.jpg";

const menuItems = [
  { id: 1, name: "Paneer Pizza", image: pizza, price: 250, category: "Starters", type: "Vegetarian", calories: 265, protein: "11g", carbs: "33g", fat: "10g", description: "Cheesy pizza loaded with paneer cubes and veggies." },
  { id: 2, name: "Veggie Burger", image: burger, price: 180, category: "Starters", type: "Vegetarian", calories: 310, protein: "12g", carbs: "45g", fat: "8g", description: "Crispy veggie patty with lettuce and sauce in soft buns." },
  { id: 3, name: "Samosa", image: samosa, price: 50, category: "Starters", type: "Vegetarian", calories: 180, protein: "4g", carbs: "22g", fat: "8g", description: "Crispy fried pastry stuffed with spicy potato filling." },
  { id: 4, name: "Spring Rolls", image: springRolls, price: 120, category: "Starters", type: "Vegetarian", calories: 200, protein: "5g", carbs: "25g", fat: "9g", description: "Crispy rolls filled with vegetables and served with sauce." },
  { id: 5, name: "Garlic Bread", image: garlicBread, price: 80, category: "Starters", type: "Vegetarian", calories: 150, protein: "6g", carbs: "18g", fat: "5g", description: "Toasted bread with garlic butter and herbs." },
  { id: 6, name: "Paneer Tikka", image: paneertikka, price: 220, category: "Starters", type: "Vegetarian", calories: 280, protein: "18g", carbs: "12g", fat: "15g", description: "Grilled paneer marinated in spicy yogurt mix." },

  { id: 7, name: "Butter Chicken", image: butterChicken, price: 350, category: "Main Course", type: "Non-Vegetarian", calories: 490, protein: "32g", carbs: "20g", fat: "30g", description: "Tender chicken pieces in creamy tomato gravy." },
  { id: 8, name: "Veg Biryani", image: biryaniVeg, price: 180, category: "Main Course", type: "Vegetarian", calories: 420, protein: "10g", carbs: "65g", fat: "12g", description: "Fragrant rice with mixed vegetables and spices." },
  { id: 9, name: "Chicken Biryani", image: biryaniChicken, price: 300, category: "Main Course", type: "Non-Vegetarian", calories: 480, protein: "28g", carbs: "55g", fat: "14g", description: "Basmati rice cooked with spiced chicken and herbs." },
  { id: 10, name: "Palak Paneer", image: palakPaneer, price: 200, category: "Main Course", type: "Vegetarian", calories: 340, protein: "16g", carbs: "18g", fat: "20g", description: "Soft paneer cubes in creamy spinach sauce." },
  { id: 11, name: "Dal Tadka", image: dalTadka, price: 150, category: "Main Course", type: "Vegetarian", calories: 230, protein: "13g", carbs: "22g", fat: "9g", description: "Yellow lentils tempered with ghee and spices." },
  { id: 12, name: "Chole Bhature", image: choleBhature, price: 220, category: "Main Course", type: "Vegetarian", calories: 520, protein: "14g", carbs: "60g", fat: "20g", description: "Spicy chickpeas served with fried bread (bhature)." },
  { id: 13, name: "Veg Fried Rice", image: friedRice, price: 150, category: "Main Course", type: "Vegetarian", calories: 350, protein: "8g", carbs: "50g", fat: "10g", description: "Stir-fried rice with vegetables and soy sauce." },
  { id: 14, name: "Schezwan Noodles", image: noodles, price: 180, category: "Main Course", type: "Vegetarian", calories: 390, protein: "10g", carbs: "60g", fat: "11g", description: "Spicy noodles tossed in flavorful Schezwan sauce." },
  { id: 15, name: "Chicken Manchurian", image: chickenmanchurian, price: 280, category: "Main Course", type: "Non-Vegetarian", calories: 450, protein: "25g", carbs: "35g", fat: "18g", description: "Crispy chicken balls in tangy Manchurian sauce." },

  { id: 16, name: "Gulab Jamun", image: gulabJamun, price: 80, category: "Desserts", type: "Vegetarian", calories: 260, protein: "4g", carbs: "36g", fat: "11g", description: "Soft milk dumplings soaked in sugar syrup." },
  { id: 17, name: "Ice Cream Sundae", image: iceCream, price: 120, category: "Desserts", type: "Vegetarian", calories: 320, protein: "6g", carbs: "40g", fat: "15g", description: "Creamy ice cream topped with chocolate and nuts." },
  { id: 18, name: "Cheesecake", image: cheesecake, price: 180, category: "Desserts", type: "Vegetarian", calories: 450, protein: "9g", carbs: "35g", fat: "30g", description: "Rich and creamy cheesecake with biscuit crust." },
  { id: 19, name: "Chocolate Brownie", image: brownie, price: 150, category: "Desserts", type: "Vegetarian", calories: 390, protein: "6g", carbs: "42g", fat: "20g", description: "Moist chocolate brownie with rich cocoa flavor." },
  { id: 20, name: "Rasgulla", image: rasgulla, price: 80, category: "Desserts", type: "Vegetarian", calories: 180, protein: "5g", carbs: "28g", fat: "4g", description: "Soft spongy balls soaked in light sugar syrup." },
  { id: 21, name: "Rasmalai", image: rasmalai, price: 100, category: "Desserts", type: "Vegetarian", calories: 210, protein: "6g", carbs: "25g", fat: "8g", description: "Cottage cheese patties served in saffron milk." },

  { id: 22, name: "Mojito", image: mojito, price: 90, category: "Drinks", type: "Vegetarian", calories: 90, protein: "0g", carbs: "22g", fat: "0g", description: "Refreshing mint and lime drink with soda." },
  { id: 23, name: "Masala Chai", image: chai, price: 40, category: "Drinks", type: "Vegetarian", calories: 100, protein: "3g", carbs: "10g", fat: "4g", description: "Indian tea flavored with spices and milk." },
  { id: 24, name: "Cold Coffee", image: coldCoffee, price: 100, category: "Drinks", type: "Vegetarian", calories: 180, protein: "4g", carbs: "25g", fat: "7g", description: "Chilled coffee blended with milk and sugar." },
  { id: 25, name: "Mango Shake", image: mangoShake, price: 120, category: "Drinks", type: "Vegetarian", calories: 220, protein: "6g", carbs: "40g", fat: "5g", description: "Sweet and creamy mango milkshake." },
  { id: 26, name: "Orange Juice", image: orangeJuice, price: 80, category: "Drinks", type: "Vegetarian", calories: 110, protein: "2g", carbs: "26g", fat: "0g", description: "Freshly squeezed orange juice rich in vitamin C." },
  { id: 27, name: "Hot Chocolate", image: hotChocolate, price: 90, category: "Drinks", type: "Vegetarian", calories: 250, protein: "8g", carbs: "32g", fat: "10g", description: "Rich and creamy hot chocolate drink." },
];

export default function Menu({ onAddToCart }) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedFood, setSelectedFood] = useState(null);

  /* 🔥 NEW: MongoDB foods (ADDED, NOT REPLACED) */
  const [foods, setFoods] = useState([]);   // 🔥 MISSING THA

  /* 🔥 FETCH FROM BACKEND (ADDED) */
  useEffect(() => {
    axios
      .get("https://snaeeats.onrender.com/api/menu")
      .then((res) => {
        if (res.data && res.data.length > 0) {
          setFoods(res.data);
        }
      })
      .catch(() => {
        console.log("MongoDB not available, using static data");
      });
  }, []);



  /* ✅ ADD THIS FUNCTION HERE ⬇️⬇️⬇️ */
  const isRecentlyAdded = (createdAt) => {
    if (!createdAt) return false;
    const now = new Date();
    const created = new Date(createdAt);
    const diffInHours = (now - created) / (1000 * 60 * 60);
    return diffInHours <= 24; // last 24 hours
  };
  /* 🔥 DATA SOURCE SWITCH (ADDED) */
const dataSource =
  foods.length > 0
    ? [...foods, ...menuItems]   // 🔥 BOTH SHOW
    : menuItems;

  const categories = [
    "All",
    "Starters",
    "Main Course",
    "Desserts",
    "Drinks",
    "Vegetarian",
    "Non-Vegetarian",
  ];

  /* ❗ ONLY THIS LINE CHANGED */
const filteredItems = dataSource
  .filter(item => item.foodType !== "diet")   // 🔥 ONLY NORMAL + STATIC
  .filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      filter === "All" || item.category === filter || item.type === filter;
    return matchesSearch && matchesFilter;
  });

  const handleAddToCart = (dish) => {
    onAddToCart({ ...dish, price: Number(dish.price) });
  };

  return (
    <div className="min-h-screen dark:bg-gray-900 text-green-800 dark:text-light pt-24 pb-16">
      <h2 className="text-4xl font-bold text-center mb-8 text-green-700 dark:text-green-400">
        Food Items
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12 px-6">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-4 py-2 w-full md:w-80 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-800 dark:text-white"
        >
          {categories.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {filteredItems.length > 0 ? (
          filteredItems.map((dish) => (
            <div
              key={dish.id}
              className="relative rounded-xl overflow-hidden shadow-md hover:scale-105 transform transition-all bg-white dark:bg-gray-800 cursor-pointer"
              onClick={() => setSelectedFood(dish)}
            >
              {/* 🔔 Recently Added Badge */}
{dish._id && isRecentlyAdded(dish.createdAt) && (
  <span className="absolute top-2 left-2 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
    NEW / Recently Added
  </span>
)}


              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{dish.name}</h3>
                <p className="text-green-600 dark:text-green-400 font-semibold mt-1">₹{dish.price}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(dish);
                  }}
                  className="mt-3 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300 col-span-full">
            No dishes found 🍽️
          </p>
        )}
      </div>

      {/* Modal for Food Details */}
      {selectedFood && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg max-w-md w-full relative">
            <button
              onClick={() => setSelectedFood(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>

            <img
              src={selectedFood.image}
              alt={selectedFood.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-green-700 dark:text-green-400 mb-2">
              {selectedFood.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              {selectedFood.description}
            </p>
            <p className="text-green-600 dark:text-green-400 font-semibold mb-2">
              Price: ₹{selectedFood.price}
            </p>

            <div className="space-y-1 text-gray-800 dark:text-gray-200">
              <p><strong>Calories:</strong> {selectedFood.calories}</p>
              <p><strong>Protein:</strong> {selectedFood.protein}</p>
              <p><strong>Carbohydrates:</strong> {selectedFood.carbs}</p>
              <p><strong>Fat:</strong> {selectedFood.fat}</p>
              <p><strong>Type:</strong> {selectedFood.type}</p>
            </div>

            <button
              onClick={() => {
                handleAddToCart(selectedFood);
                setSelectedFood(null);
              }}
              className="mt-5 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
   