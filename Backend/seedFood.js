import mongoose from "mongoose";
import dotenv from "dotenv";
import FoodItem from "./models/FoodItem.js";
const OLD_DATE = new Date("2025-9-26");
dotenv.config();

const foods = [
  {
    name: "Paneer Pizza",
    category: "Starters",
    type: "Vegetarian",
    price: 250,
    calories: 265,
    protein: "11g",
    carbs: "33g",
    fat: "10g",
    description: "Cheesy pizza loaded with paneer cubes",
    image: "https://img.freepik.com/premium-photo/paneer-pizza-top-view-white-background_957803-1943.jpg?w=2000",
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Veggie Burger",
    category: "Starters",
    type: "Vegetarian",
    price: 180,
    image: "https://passtheplants.com/wp-content/uploads/2019/03/vegan-veggie-burgers-01.jpg",
    calories: 310,
    protein: "12g", 
    carbs: "45g", 
    fat: "8g", 
    description: "Crispy veggie patty with lettuce and sauce in soft buns.",
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Samosa",
    category: "Starters",
    type: "Vegetarian",
    price: 50,
    image: "https://static.vecteezy.com/system/resources/previews/026/553/215/non_2x/samosa-in-the-kitchen-table-foodgraphy-ai-generated-photo.jpg",
    category: "Starters",
    calories: 180, 
    protein: "4g", 
    carbs: "22g", 
    fat: "8g", 
    description: "Crispy fried pastry stuffed with spicy potato filling." ,
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
  name: "Garlic Bread",
  category: "Starters",
  type: "Vegetarian",
  price: 80,
  calories: 150,
  protein: "6g",
  carbs: "18g",
  fat: "5g",
  description: "Toasted bread with garlic butter and herbs",
  image: "https://tse1.mm.bing.net/th/id/OIP.pwa25oZDquY0dmoA0RSS_wHaE8?pid=Api&P=0&h=180",
  createdAt: OLD_DATE,
  updatedAt: OLD_DATE
},

  {
    name: "Paneer Tikka",
    category: "Starters",
    type: "Vegetarian",
    price: 220,
    image: "https://img.freepik.com/premium-photo/juicy-tandoori-paneer-tikka-white-background-paneer-tikka-image-photography_1020697-118609.jpg?w=2000",
    category: "Starters", calories: 280, protein: "18g", carbs: "12g", fat: "15g", description: "Grilled paneer marinated in spicy yogurt mix." ,
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Butter Chicken",
    category: "Main Course",
    type: "Non-Vegetarian",
    price: 350,
    image: "https://tse2.mm.bing.net/th/id/OIP.8dfpTQRil9coDPlK_nKzOgHaJl?pid=Api&P=0&h=180",
    category: "Main Course", type: "Non-Vegetarian", calories: 490, protein: "32g", carbs: "20g", fat: "30g", description: "Tender chicken pieces in creamy tomato gravy.",
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
     name: "Spring Rolls", 
     price: 120, 
     category: "Starters", 
     type: "Vegetarian", 
     image:"https://tse4.mm.bing.net/th/id/OIP.k14ICh_56BnTrelydq8OdQHaFC?pid=Api&P=0&h=180",
     calories: 200, 
     protein: "5g", 
     carbs: "25g",
    fat: "9g",
    description: "Crispy rolls filled with vegetables and served with sauce.",
  },
  {
    name: "Veg Biryani",
    category: "Main Course",
    type: "Vegetarian",
    price: 180,
    image: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2016/07/veg-biryani-recipe-step-by-step-instructions.jpg?fit=3563%2C2976&quality=30&strip=all&ssl=1",
    category: "Main Course", type: "Vegetarian", calories: 420, protein: "10g", carbs: "65g", fat: "12g", description: "Fragrant rice with mixed vegetables and spices." ,
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Gulab Jamun",
    category: "Desserts",
    type: "Vegetarian",
    price: 80,
    image: "https://tse2.mm.bing.net/th/id/OIP.TR6gVZG-S4YxWTyGXxAHiwHaFk?pid=Api&P=0&h=180",
    category: "Desserts", calories: 260, protein: "4g", carbs: "36g", fat: "11g", description: "Soft milk dumplings soaked in sugar syrup.",
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Mojito",
    category: "Drinks",
    type: "Vegetarian",
    price: 90,
    image: "https://cookieandkate.com/images/2020/08/best-mojito-recipe-2.jpg",
    category: "Drinks", calories: 90, protein: "0g", carbs: "22g", fat: "0g", description: "Refreshing mint and lime drink with soda.",
    createdAt: OLD_DATE,
    updatedAt: OLD_DATE
  },
  {
    name: "Ice Cream Sundae",price: 120, category: "Desserts", type: "Vegetarian", calories: 320, protein: "6g", carbs: "40g", fat: "15g", description: "Creamy ice cream topped with chocolate and nuts." ,image:"https://icecreamfromscratch.com/wp-content/uploads/2022/05/Ice-Cream-Sundae-Pin-1.jpg",
  },
  {
    name: "Cheesecake", price: 180, category: "Desserts", type: "Vegetarian", calories: 450, protein: "9g", carbs: "35g", fat: "30g", description: "Rich and creamy cheesecake with biscuit crust." ,image:"https://rakaminstudent.com/wp-content/uploads/2023/03/strawberry-cheesecake-11-1-1024x1024.jpg",
  },
  {
    name: "Chocolate Brownie", price: 150, category: "Desserts", type: "Vegetarian", calories: 390, protein: "6g", carbs: "42g", fat: "20g", description: "Moist chocolate brownie with rich cocoa flavor." , image:"https://tse4.mm.bing.net/th/id/OIP.TVFaHY8YDTU18BHJJM2lNQHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Rasgulla",  price: 80, category: "Desserts", type: "Vegetarian", calories: 180, protein: "5g", carbs: "28g", fat: "4g", description: "Soft spongy balls soaked in light sugar syrup." , image:"https://tse2.mm.bing.net/th/id/OIP.vuIV8CmZRUHERyJrsMMlDgHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Rasmalai", price: 100, category: "Desserts", type: "Vegetarian", calories: 210, protein: "6g", carbs: "25g", fat: "8g", description: "Cottage cheese patties served in saffron milk.", image:"https://www.shutterstock.com/image-photo/rasmalai-rossomalai-roshmolai-rasamalei-very-260nw-1909236811.jpg",
  },
  {
    name: "Masala Chai",price: 40, category: "Drinks", type: "Vegetarian", calories: 100, protein: "3g", carbs: "10g", fat: "4g", description: "Indian tea flavored with spices and milk.",image:"https://tse2.mm.bing.net/th/id/OIP.oXKEMra_5aLW9JV1qcairgHaEK?pid=Api&P=0&h=180",
  },
  {
     name: "Cold Coffee", price: 100, category: "Drinks", type: "Vegetarian", calories: 180, protein: "4g", carbs: "25g", fat: "7g", description: "Chilled coffee blended with milk and sugar.",image:"https://realfood.tesco.com/media/images/RFO-1400x919-IcedCoffee-76221116-2565-4103-9899-89571028018e-0-1400x919.jpg",
  },
  {
    name: "Mango Shake",price: 120, category: "Drinks", type: "Vegetarian", calories: 220, protein: "6g", carbs: "40g", fat: "5g", description: "Sweet and creamy mango milkshake." ,image:"https://tse1.mm.bing.net/th/id/OIP.2pAEcVytaZsAZ5P0J3LyaQHaEJ?pid=Api&P=0&h=180",
  },
  {
    name: "Orange Juice",price: 80, category: "Drinks", type: "Vegetarian", calories: 110, protein: "2g", carbs: "26g", fat: "0g", description: "Freshly squeezed orange juice rich in vitamin C.", image:"https://tse4.mm.bing.net/th/id/OIP.kxzvbAvoWNgLy8mENLyReAHaE8?pid=Api&P=0&h=180",
  },
  {
    name: "Hot Chocolate", price: 90, category: "Drinks", type: "Vegetarian", calories: 250, protein: "8g", carbs: "32g", fat: "10g", description: "Rich and creamy hot chocolate drink." ,image:"https://tse2.mm.bing.net/th/id/OIP.6x5vwwJLtIOtTXAn57elWAHaE8?pid=Api&P=0&h=180",
  }
  // 🔁 baaki items bhi isi format me add karo
    
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
   
    await FoodItem.insertMany(foods);
    console.log("✅ All food items inserted into MongoDB");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDB();
