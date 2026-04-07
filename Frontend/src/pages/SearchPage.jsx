import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();

  // 🔹 Read query params
  const params = new URLSearchParams(location.search);
  const food = params.get("search") || "";
  const userLocation = params.get("location") || "";

  const handleShowResults = () => {
    navigate(
      `/recommendations?search=${food}&location=${userLocation}`
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">

        <h1 className="text-2xl font-bold text-center text-red-600 mb-6">
          Your Search 🔍
        </h1>

        <div className="space-y-4 text-lg text-gray-700">
          <p>
            📍 <span className="font-semibold">Location:</span>{" "}
            {userLocation || "Any location"}
          </p>

          <p>
            🍽️ <span className="font-semibold">Food Item:</span>{" "}
            {food || "Any food"}
          </p>
        </div>

        <button
          onClick={handleShowResults}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
        >
          Show Food Near Me 🍽️
        </button>

        <p className="text-sm text-gray-500 text-center mt-4">
          Results shown exactly as per your input
        </p>
      </div>
    </div>
  );
}
