/* ===================== DUMMY FOOD DATA (30 ITEMS) ===================== 
const FOOD_DATA = [
  // 🍰 CAKES
  {
    id: 1,
    name: "Chocolate Cake",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
    price: 320,
    calories: 520,
    dietType: "Vegetarian",
    protein: "Low Protein",
    fat: "Medium Fat",
    sugar: "High Sugar",
    category: "Cake",
    costPrice: 250,
  },
  {
    id: 2,
    name: "Healthy Oats Cake",
    image: "https://www.yumtoyum.com/wp-content/uploads/2025/11/kaafqu5z7izpqauezoto.webp",
    price: 260,
    calories: 250,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Cake",
    costPrice: 200,
  },
  {
    id: 3,
    name: "Banana Walnut Cake",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    price: 280,
    calories: 390,
    dietType: "Vegetarian",
    protein: "Low Protein",
    fat: "Medium Fat",
    sugar: "Medium Sugar",
    category: "Cake",
    costPrice: 220,
  },

  // 🥗 VEG / VEGAN
  {
    id: 4,
    name: "Grilled Paneer Salad",
    image: "https://joyfilledeats.com/wp-content/uploads/2017/05/IMG_0613.jpg",
    price: 280,
    calories: 350,
    dietType: "Vegetarian",
    protein: "High Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Salad",
    costPrice: 250,
  },
  {
    id: 5,
    name: "Vegan Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
    price: 300,
    calories: 380,
    dietType: "Vegan",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Bowl",
    costPrice: 290,
  },
  {
    id: 6,
    name: "Fruit Salad Bowl",
    image: "https://tse1.mm.bing.net/th/id/OIP.R15-AUb1n8aHwME-CjD7XgHaHa?pid=Api&P=0&h=180",
    price: 190,
    calories: 180,
    dietType: "Vegan",
    protein: "Low Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Salad",
    costPrice: 120,
  },
  {
    id: 7,
    name: "Vegetable Stir Fry",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
    price: 240,
    calories: 310,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Main",
    costPrice: 200,
  },

  // 🍗 NON-VEG
  {
    id: 8,
    name: "Chicken Breast Bowl",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
    price: 360,
    calories: 420,
    dietType: "Non-Vegetarian",
    protein: "High Protein",
    fat: "Low Fat",
    sugar: "No Sugar",
    category: "Bowl",
    costPrice: 300,
  },
  {
    id: 9,
    name: "Grilled Fish Plate",
    image: "https://tse4.mm.bing.net/th/id/OIP.Oc42kgoOw0s4_NDyhjC4EAHaE8?pid=Api&P=0&h=180",
    price: 390,
    calories: 410,
    dietType: "Non-Vegetarian",
    protein: "High Protein",
    fat: "Low Fat",
    sugar: "No Sugar",
    category: "Seafood",
    costPrice: 320,
  },
  {
    id: 10,
    name: "Egg White Omelette",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
    price: 200,
    calories: 240,
    dietType: "Non-Vegetarian",
    protein: "High Protein",
    fat: "Low Fat",
    sugar: "No Sugar",
    category: "Breakfast",
    costPrice: 150,
  },
  {
    id: 11,
    name: "Chicken Wrap",
    image: "https://i.pinimg.com/originals/c5/c2/0e/c5c20ecbf74ef43df34c3ab6a9fd6c4e.png",
    price: 310,
    calories: 450,
    dietType: "Non-Vegetarian",
    protein: "High Protein",
    fat: "Medium Fat",
    sugar: "Low Sugar",
    category: "Wrap",
    costPrice: 250,
  },
  {
    id: 12,
    name: "Chicken Tikka",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
    price: 340,
    calories: 480,
    dietType: "Non-Vegetarian",
    protein: "High Protein",
    fat: "Medium Fat",
    sugar: "No Sugar",
    category: "Starter",
    costPrice: 280,
  },

  // 🍳 BREAKFAST / LIGHT
  {
    id: 13,
    name: "Oats Porridge",
    image: "https://tse3.mm.bing.net/th/id/OIP.TXIg8i7rPmzvVOk9s9IerAHaEK?pid=Api&P=0&h=180",
    price: 180,
    calories: 210,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Breakfast",
    costPrice: 120,
  },
  {
    id: 14,
    name: "Peanut Butter Toast",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141",
    price: 150,
    calories: 260,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Medium Fat",
    sugar: "Low Sugar",
    category: "Breakfast",
    costPrice: 100,
  },

  // 🥤 DRINKS
  {
    id: 15,
    name: "Protein Smoothie",
    image: "https://www.eatingwell.com/thmb/KCDDSEVOd4pRYoDokPJ4cUuwLxI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-57793-berry-kefir-smoothie-Hero-01-A-ae9e20c50f1843928b81c102bfa80b4c.jpg",
    price: 210,
    calories: 220,
    dietType: "Vegetarian",
    protein: "High Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Drink",
    costPrice: 150,
  },
  {
    id: 16,
    name: "Green Detox Juice",
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721",
    price: 170,
    calories: 120,
    dietType: "Vegan",
    protein: "Low Protein",
    fat: "No Fat",
    sugar: "Low Sugar",
    category: "Drink",
    costPrice: 120,
  },

  // 🍛 MAINS
  {
    id: 17,
    name: "Brown Rice Veg Bowl",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
    price: 260,
    calories: 360,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Bowl",
    costPrice: 200,
  },
  {
    id: 18,
    name: "Rajma Chawal",
    image: "https://images.unsplash.com/photo-1628294895950-9805252327bc",
    price: 240,
    calories: 430,
    dietType: "Vegetarian",
    protein: "Medium Protein",
    fat: "Low Fat",
    sugar: "Low Sugar",
    category: "Main",
    costPrice: 180,
  },

  // 🍔 CHEAT / FAST
  {
    id: 19,
    name: "Veg Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    price: 220,
    calories: 480,
    dietType: "Vegetarian",
    protein: "Low Protein",
    fat: "High Fat",
    sugar: "Medium Sugar",
    category: "FastFood",
    costPrice: 200,
  },
  {
    id: 20,
    name: "Chicken Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
    price: 260,
    calories: 520,
    dietType: "Non-Vegetarian",
    protein: "Medium Protein",
    fat: "High Fat",  
    sugar: "Medium Sugar",
    category: "FastFood",
    costPrice:200,
  },

  // EXTRA SAFE OPTIONS
  { id: 21, name: "Idli Sambhar", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", price: 180, calories: 280, dietType: "Vegetarian", protein: "Low Protein", fat: "Low Fat", sugar: "Low Sugar", category: "Breakfast",costPrice:150 },
  { id: 22, name: "Dalia Khichdi", image: "https://images.unsplash.com/photo-1628294895950-9805252327bc", price: 210, calories: 300, dietType: "Vegetarian", protein: "Medium Protein", fat: "Low Fat", sugar: "Low Sugar", category: "Main",costPrice: 180},
  { id: 23, name: "Boiled Eggs Plate", image: "https://www.deliciousmeetshealthy.com/wp-content/uploads/2019/10/Hard-Boiled-Eggs-9.jpg", price: 160, calories: 200, dietType: "Non-Vegetarian", protein: "High Protein", fat: "Low Fat", sugar: "No Sugar", category: "Protein",costPrice: 100 },
  { id: 24, name: "Tofu Stir Fry", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6", price: 260, calories: 340, dietType: "Vegan", protein: "High Protein", fat: "Low Fat", sugar: "Low Sugar", category: "Main",costPrice:200 },
  { id: 25, name: "Chicken Soup", image: "https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-superJumbo.jpg", price: 230, calories: 260, dietType: "Non-Vegetarian", protein: "Medium Protein", fat: "Low Fat", sugar: "No Sugar", category: "Soup",costPrice: 200},
  { id: 26, name: "Veg Clear Soup", image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6", price: 190, calories: 180, dietType: "Vegetarian", protein: "Low Protein", fat: "Low Fat", sugar: "No Sugar", category: "Soup",costPrice: 150},
  { id: 27, name: "Paneer Bhurji", image: "https://tse2.mm.bing.net/th/id/OIP.dLvmGFIGfIsMJlfMcfsj4wHaE8?pid=Api&P=0&h=180", price: 290, calories: 420, dietType: "Vegetarian", protein: "High Protein", fat: "Medium Fat", sugar: "Low Sugar", category: "Main",costPrice:220 },
  { id: 28, name: "Grilled Chicken Salad", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c", price: 330, calories: 360, dietType: "Non-Vegetarian", protein: "High Protein", fat: "Low Fat", sugar: "No Sugar", category: "Salad",costPrice: 300},
  { id: 29, name: "Masala Dosa", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0", price: 220, calories: 410, dietType: "Vegetarian", protein: "Low Protein", fat: "Medium Fat", sugar: "Low Sugar", category: "Breakfast",costPrice: 190},
  { id: 30, name: "Sprouts Salad", image: "https://samirasrecipe.com/wp-content/uploads/2018/08/Sprouts-Salad-16.jpg", price: 200, calories: 220, dietType: "Vegan", protein: "High Protein", fat: "Low Fat", sugar: "Low Sugar", category: "Salad",costPrice:150 },


  // 🥑 KETO ITEMS
{
  id: 31,
  name: "Keto Paneer Bowl",
  image: "https://i0.wp.com/www.cookedbyjulie.com/wp-content/uploads/2018/04/saagpaneer2.jpg?resize=3318%2C2212&ssl=1",
  price: 340,
  calories: 480,
  dietType: "Keto",
  protein: "Medium Protein",
  fat: "High Fat",
  sugar: "No Sugar",
  category: "Bowl",
  costPrice: 300
},
{
  id: 32,
  name: "Butter Grilled Chicken",
  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  price: 390,
  calories: 520,
  dietType: "Keto",
  protein: "High Protein",
  fat: "High Fat",
  sugar: "No Sugar",
  category: "Main",
  costPrice: 300
},
{
  id: 33,
  name: "Cheese Omelette",
  image: "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  price: 220,
  calories: 420,
  dietType: "Keto",
  protein: "Medium Protein",
  fat: "High Fat",
  sugar: "No Sugar",
  category: "Breakfast",
  costPrice: 180
},

// 🍞 LOW CARB ITEMS
{
  id: 34,
  name: "Low Carb Chicken Salad",
  image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
  price: 320,
  calories: 360,
  dietType: "Low Carb",
  protein: "High Protein",
  fat: "Low Fat",
  sugar: "No Sugar",
  category: "Salad",
  costPrice: 290
},
{
  id: 35,
  name: "Paneer Low Carb Wrap",
  image: "https://tse3.mm.bing.net/th/id/OIP.Oy_VL2XeKiAf79SdK2K47wHaE8?pid=Api&P=0&h=180",
  price: 300,
  calories: 390,
  dietType: "Low Carb",
  protein: "High Protein",
  fat: "Medium Fat",
  sugar: "Low Sugar",
  category: "Wrap",
  costPrice: 250
},
{
  id: 36,
  name: "Low Carb Veg Stir Fry",
  image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6",
  price: 260,
  calories: 310,
  dietType: "Low Carb",
  protein: "Medium Protein",
  fat: "Low Fat",
  sugar: "Low Sugar",
  category: "Main",
  costPrice: 200
}

];
*/

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function Recommendations({ onAddToCart }) {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // ✅ FIRST: read params
  const search = params.get("search") || "";
  const calories = params.get("calories");
  const dietType = params.get("dietType");
  const protein = params.get("protein");
  const fat = params.get("fat");
  const sugar = params.get("sugar");

  // ✅ SECOND: state
  const [foods, setFoods] = useState([]);

  // ✅ THIRD: useEffect
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res =await axios.get("https://snaeeats.onrender.com/api/recommendations", {

          params: {
            search,
            calories,
            dietType,
            protein,
            fat,
            sugar,
          },
        });
       
        setFoods(res.data);
      } catch (err) {
        console.log("Error fetching foods", err);
      }
    };

    fetchFoods();
  }, [search, calories, dietType, protein, fat, sugar]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white px-6 pt-28 pb-12">
      <h1 className="text-3xl font-bold text-center text-green-600 mb-10">
        Recommended Food Items 🍽️
      </h1>

      {foods.length > 0 ? (
        <FoodGrid foods={foods} onAddToCart={onAddToCart} />
      ) : (
       <p className="text-center text-gray-500 dark:text-gray-400">
          No food found matching your preferences 😕
        </p>
      )}
    </div>
  );
}

function FoodGrid({ foods, onAddToCart }) {

  const sortedFoods = [...foods].sort((a, b) => {
    if (a.foodType === "diet") return -1;
    if (b.foodType === "diet") return 1;
    return 0;
  });

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {sortedFoods.map((food) => (
       <div key={food._id} className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-hidden relative">

          {food.foodType === "diet" && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded z-10">
              Recommended ⭐
            </span>
          )}

<img
  src={
    food.image?.startsWith("http")
      ? food.image
      : food.image?.startsWith("/images")
      ? food.image
      : `https://snaeeats.onrender.com/uploads/${food.image}`
  }
  alt={food.name}
  className="w-full h-40 object-cover"
/>
          <div className="p-4">
            <h2 className="font-semibold text-gray-800 dark:text-white">
  {food.name}
</h2>
            <p className="text-green-600 font-bold dark:text-green-400">
  ₹{food.costPrice}
</p>

            <button
              onClick={() => onAddToCart(food)}
              className="mt-3 w-full bg-green-600 text-white py-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}