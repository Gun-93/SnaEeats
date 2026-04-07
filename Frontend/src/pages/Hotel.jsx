import React, { useState } from "react";
import pizza from "../assets/paneer-pizza.jpg";
import burger from "../assets/veggie-burger.jpg";
import biryani from "../assets/veg-biryani.jpg";
import noodles from "../assets/noodles.jpg";
import gulabJamun from "../assets/gulab-jamun.jpg";
import rasmalai from "../assets/rasmalai.jpg";
import coldCoffee from "../assets/cold-coffee.jpg";

const hotels = [
  {
    id: 1,
    name: "Skylark Hotel, Howrah",
    type: "Luxury • Boutique",
    rating: 4.0,
    image: biryani,
    location: "Howrah Maidan",
    description:
      "Experience premium luxury and comfort with our signature hospitality at Skylark Hotel.",
    amenities: ["Free Wi-Fi", "Pool", "Restaurant", "Parking"],
    calories: 480,
    carbs: "55g",
    protein: "30g",
    fat: "18g",
  },
  {
    id: 2,
    name: "Barbeque Nation Hotel, Howrah",
    type: "Resort • Buffet",
    rating: 4.3,
    image: pizza,
    location: "Forum Rangoli Mall, Howrah",
    description:
      "Enjoy live grill and buffet dining with a range of vegetarian and non-vegetarian delicacies.",
    amenities: ["Buffet", "Air Conditioning", "Family Friendly"],
    calories: 520,
    carbs: "65g",
    protein: "25g",
    fat: "20g",
  },
  {
    id: 3,
    name: "Bridge View Rooftop Hotel",
    type: "Luxury • Rooftop",
    rating: 4.6,
    image: noodles,
    location: "Shibpur, Howrah",
    description:
      "Dine under the stars with a panoramic view of the Howrah Bridge.",
    amenities: ["Rooftop Dining", "Bar", "City View"],
    calories: 460,
    carbs: "50g",
    protein: "22g",
    fat: "15g",
  },
  {
    id: 4,
    name: "Mainland China Hotel, Shibpur",
    type: "Business • Chinese",
    rating: 4.2,
    image: noodles,
    location: "Shibpur, Howrah",
    description:
      "A fine-dining Chinese restaurant offering authentic oriental flavors.",
    amenities: ["Fine Dining", "Private Rooms"],
    calories: 400,
    carbs: "45g",
    protein: "20g",
    fat: "12g",
  },
  {
    id: 5,
    name: "Khana Khazana Hotel, Howrah",
    type: "Multi-Cuisine • Boutique",
    rating: 4.1,
    image: burger,
    location: "Howrah Station Road",
    description:
      "Serving Indian, Continental, and Chinese cuisines with excellent service.",
    amenities: ["Multi-Cuisine", "Family Dining"],
    calories: 530,
    carbs: "60g",
    protein: "28g",
    fat: "22g",
  },
  {
    id: 6,
    name: "Cafe By The Lane Hotel, Howrah",
    type: "Cafe • Budget Stay",
    rating: 4.4,
    image: coldCoffee,
    location: "Kadamtala, Howrah",
    description:
      "A cozy budget-friendly cafe with coffee and light meals for every occasion.",
    amenities: ["Cafe", "Pet Friendly"],
    calories: 320,
    carbs: "38g",
    protein: "8g",
    fat: "10g",
  },
  {
    id: 7,
    name: "Fusion Hotel, Liluah",
    type: "Boutique • Family Stay",
    rating: 4.0,
    image: pizza,
    location: "Liluah, Howrah",
    description:
      "A perfect blend of modern amenities and family-friendly ambience.",
    amenities: ["Family Rooms", "Restaurant"],
    calories: 490,
    carbs: "58g",
    protein: "27g",
    fat: "19g",
  },
  {
    id: 8,
    name: "7th Heaven Hotel, Howrah",
    type: "Luxury • Dessert Specialty",
    rating: 4.5,
    image: gulabJamun,
    location: "Howrah AC Market",
    description:
      "Known for its heavenly desserts and luxurious ambiance.",
    amenities: ["Dessert Cafe", "Air Conditioning"],
    calories: 600,
    carbs: "80g",
    protein: "15g",
    fat: "25g",
  },
  {
    id: 9,
    name: "Absolute Barbecues Hotel (Avani Mall)",
    type: "Resort • Buffet",
    rating: 4.3,
    image: biryani,
    location: "Avani Riverside Mall, Howrah",
    description:
      "Unlimited buffet dining with a variety of grilled items and desserts.",
    amenities: ["Buffet", "Bar"],
    calories: 550,
    carbs: "70g",
    protein: "30g",
    fat: "20g",
  },
  {
    id: 10,
    name: "Rajdhani Thali Hotel, Kolkata",
    type: "Budget • Veg Friendly",
    rating: 4.4,
    image: rasmalai,
    location: "Esplanade, Kolkata",
    description:
      "Authentic Rajasthani thali served in traditional style with unlimited refills.",
    amenities: ["Veg Only", "Thali", "Family Dining"],
    calories: 450,
    carbs: "55g",
    protein: "20g",
    fat: "15g",
  },
];

export default function Hotel() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const types = [
    "All",
    "Luxury",
    "Boutique",
    "Resort",
    "Budget",
    "Rooftop",
    "Business",
    "Family Stay",
    "Veg Friendly",
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesName = hotel.name.toLowerCase().includes(search.toLowerCase());
    const matchesType =
      filterType === "All" ||
      hotel.type.toLowerCase().includes(filterType.toLowerCase());
    return matchesName && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-16">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-gray-200">
        Hotels in Howrah & Kolkata
      </h2>

      {/* Search & Filter */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by hotel name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Hotel Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {filteredHotels.map((hotel) => (
          <div
            key={hotel.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition-all"
          >
            <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{hotel.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{hotel.type}</p>
              <p className="mt-2 text-yellow-500 font-medium">⭐ {hotel.rating}</p>
              <button
                onClick={() => setSelectedHotel(hotel)}
                className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
        {filteredHotels.length === 0 && (
          <p className="text-center text-gray-500 dark:text-gray-400 col-span-full">
            No hotels found.
          </p>
        )}
      </div>

      {/* Modal for Hotel Details */}
      {selectedHotel && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-lg relative">
            <button
              onClick={() => setSelectedHotel(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl"
            >
              &times;
            </button>
            <img
              src={selectedHotel.image}
              alt={selectedHotel.name}
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {selectedHotel.name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-2">
              {selectedHotel.type} | ⭐ {selectedHotel.rating}
            </p>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              📍 {selectedHotel.location}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {selectedHotel.description}
            </p>

            {/* Nutrition Info */}
            <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold text-green-800 dark:text-green-200 mb-2">
                🍽️ Nutrition Information
              </h4>
              <div className="grid grid-cols-2 gap-y-2 text-gray-800 dark:text-gray-200">
                <p>Calories: <span className="font-semibold">{selectedHotel.calories} kcal</span></p>
                <p>Carbohydrates: <span className="font-semibold">{selectedHotel.carbs}</span></p>
                <p>Protein: <span className="font-semibold">{selectedHotel.protein}</span></p>
                <p>Fat: <span className="font-semibold">{selectedHotel.fat}</span></p>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                Amenities:
              </h4>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                {selectedHotel.amenities.map((a, index) => (
                  <li key={index}>{a}</li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => setSelectedHotel(null)}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}



