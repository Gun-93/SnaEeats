import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function AdminManageFood() {
  const [foods, setFoods] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editPrice, setEditPrice] = useState("");

  const token = localStorage.getItem("token");

  const fetchFoods = async () => {
    try {
      const res = await axios.get("https://snaeeats.onrender.com/api/menu");
      setFoods(res.data || []);
    } catch (err) {
      console.log(err); 
      alert("Error fetching food list");
    }
  };

  useEffect(() => {
    fetchFoods();
  }, []);

  const deleteFood = async (id) => {
    if (!window.confirm("Delete this food item?")) return;

    try {
      await axios.delete(`https://snaeeats.onrender.com/api/menu/admin/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchFoods();
    } catch {
      alert("Error deleting food");
    }
  };

  const updatePrice = async (id) => {
    if (!editPrice) return alert("Enter price");

    try {
      await axios.put(
        `https://snaeeats.onrender.com/api/menu/admin/${id}`,
        { price: Number(editPrice) },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("✅ Price updated successfully");
      setEditingId(null);
      setEditPrice("");
      fetchFoods();
    } catch {
      alert("Error updating price");
    }
  };

  return (
    <AdminLayout>
      {/* ✅ LIGHT + DARK MODE FIX */}
      <div className="
        min-h-screen px-6 py-10
        bg-white text-gray-800
        dark:bg-black dark:text-white
      ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Manage Food Items
          </h2>

          {foods.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 text-center">
              No food items found
            </p>
          )}

          <div className="space-y-4">
            {foods.map((food) => (
              <div
                key={food._id}
                className="
                  flex justify-between items-center
                  p-4 rounded-xl border
                  bg-gray-100 border-gray-300
                  dark:bg-gray-900 dark:border-gray-700
                "
              >
                {/* LEFT */}
                <div>
                  <p className="font-semibold">
                    {food.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    ₹{food.price} • {food.category}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex gap-2">
                  {editingId === food._id ? (
                    <>
                      <input
                        type="number"
                        value={editPrice}
                        onChange={(e) => setEditPrice(e.target.value)}
                        className="
                          w-24 px-2 py-1 rounded border
                          bg-white text-gray-800 border-gray-400
                          dark:bg-black dark:text-white dark:border-gray-600
                        "
                      />
                      <button
                        onClick={() => updatePrice(food._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingId(null)}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setEditingId(food._id);
                          setEditPrice(food.price);
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteFood(food._id)}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
