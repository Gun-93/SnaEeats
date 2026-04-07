import React from "react";
import { useNavigate } from "react-router-dom";

// Import reusable components
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import PopularDishes from "../components/PopularDishes";

export default function Home() {
  const navigate = useNavigate();  
  return (
    <div className="bg-light dark:bg-dark text-dark dark:text-light min-h-screen">
      {/* Hero Section */}
      <Hero onRecommendClick={() => navigate("/recommendations")} />


      {/* Categories Section */}
      <Categories />

      {/* Popular Dishes Section */}
      <PopularDishes />
    </div>
  );
}
