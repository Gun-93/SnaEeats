import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import PopularDishes from "./components/PopularDishes";
import Footer from "./components/Footer";

// Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Checkout from "./pages/Checkout";
import FoodItem from "./pages/FoodItems";
import Offers from "./pages/Offers";
import Hotel from "./pages/Hotel";
import Payment from "./pages/Payment";
import Profile from "./pages/Profile";
import Recommendations from "./pages/Recommendations";
import SearchPage from "./pages/SearchPage";


// 🔐 Admin
import AdminDashboard from "./admin/AdminDashboard";
import AdminAddFood from "./admin/AdminAddFood";
import AdminOrders from "./admin/AdminOrders";
import AdminRoute from "./admin/AdminRoute";
import AdminManageFood from "./admin/AdminManageFood";
import AdminProfitLoss from "./admin/AdminProfitLoss";

export default function App() {
  // 🌙 Dark Mode
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 🛒 Cart State
  const [cartItems, setCartItems] = useState([]);

  // 👤 User State
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // 🚪 Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleAddToCart = (item) => {
  const itemId = item._id || item.id;

  const existing = cartItems.find(
    (i) => (i._id || i.id) === itemId
  );

  if (existing) {
    setCartItems((prev) =>
      prev.map((i) =>
        (i._id || i.id) === itemId
          ? { ...i, quantity: i.quantity + 1 }
          : i
      )
    );
  } else {
    setCartItems((prev) => [...prev, { ...item, quantity: 1 }]);
  }
};



  const handleRemove = (id) => {
  setCartItems((prev) =>
    prev.filter((item) => (item._id || item.id) !== id)
  );
};


 const handleQuantityChange = (id, qty) => {
  setCartItems((prev) =>
    prev.map((item) =>
      (item._id || item.id) === id
        ? { ...item, quantity: qty }
        : item
    )
  );
};


  return (
    <Router>
      <div
        className={`${
          darkMode
            ? "dark bg-gray-900 text-gray-100"
            : "bg-gray-50 text-gray-900"
        } min-h-screen font-sans`}
      >
        {/* ✅ NAVBAR */}
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          cartItems={cartItems}
          user={user}
          handleLogout={handleLogout}
        />

        <Routes>
          {/* ================= USER ROUTES ================= */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Categories />
                <PopularDishes onAddToCart={handleAddToCart} />
              </>
            }
          />

          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/login" element={<Login setUser={setUser} />} />

          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                handleRemove={handleRemove}
                handleQuantityChange={handleQuantityChange}
              />
            }
          />

          <Route
            path="/menu"
            element={<FoodItem onAddToCart={handleAddToCart} />}
          />

          <Route path="/offers" element={<Offers />} />

          <Route
            path="/hotels"
            element={<Hotel onAddToCart={handleAddToCart} />}
          />

          <Route path="/payment" element={<Payment />} />
          <Route path="/profile" element={<Profile />} />
<Route path="/recommendations" element={<Recommendations onAddToCart={handleAddToCart}/>} />
<Route path="/" element={<SearchPage />} />

          {/* ================= ADMIN ROUTES (FINAL) ================= */}
          <Route element={<AdminRoute />}>
  <Route path="/admin" element={<AdminDashboard />} />
  <Route path="/admin/add-food" element={<AdminAddFood />} />
  <Route path="/admin/manage-food" element={<AdminManageFood />} />
  <Route path="/admin/orders" element={<AdminOrders />} />
  <Route path="/admin/profit-loss" element={<AdminProfitLoss />} />
</Route>

        </Routes>

        {/* ✅ FOOTER */}
        <Footer />
      </div>
    </Router>
  );
}
S