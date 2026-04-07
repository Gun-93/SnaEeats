import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const savedAddress = JSON.parse(localStorage.getItem("deliveryAddress"));
  const [orders, setOrders] = useState([]);

 useEffect(() => {
  if (!user?._id) return;

  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/orders/${user._id}`
      );
      setOrders(res.data);
    } catch {
      console.log("Error fetching orders");
    }
  };

  fetchOrders();

  // 🔁 AUTO REFRESH EVERY 10 SECONDS
  const interval = setInterval(fetchOrders, 10000);

  return () => clearInterval(interval);
}, [user]);




  if (!user) {
    return (
      <p className="text-center mt-20 text-gray-700 dark:text-gray-300">
        Please login
      </p>
    );
  }

  return (
    <div className="min-h-screen bg-[#fff6e5] dark:bg-gray-900 pt-32 pb-10">

      {/* ================= PROFILE CARD ================= */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6 items-center">

          {/* Avatar */}
          <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center text-4xl font-bold">
            {user.name[0].toUpperCase()}
          </div>

          {/* User Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {user.name}
            </h2>

            <p className="text-gray-600 dark:text-gray-400">
              📧 {user.email}
            </p>

            {user.phone && (
              <p className="text-gray-600 dark:text-gray-400">
                📞 {user.phone}
              </p>
            )}

            {/* Address */}
            {savedAddress && (
              <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
                📍 {savedAddress.house}, {savedAddress.area}, {savedAddress.city} - {savedAddress.pincode}
                {savedAddress.landmark && ` (${savedAddress.landmark})`}
              </p>
            )}
          </div>

          {/* Logout */}
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "/login";
            }}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {/* ================= ORDERS ================= */}
      <div className="max-w-4xl mx-auto mt-14 px-4">
        <h3 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">
          My Orders
        </h3>

        {orders.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No orders placed yet 🍽️
          </p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Order Date: {new Date(order.createdAt).toLocaleString()}
                </p>

                <p className="font-semibold text-gray-800 dark:text-gray-100">
                  Total: ₹{order.total}
                </p>
              </div>

              <p
                className={`mt-2 font-semibold ${
                  order.status === "Delivered"
                    ? "text-green-600"
                    : order.status === "Cancelled"
                    ? "text-red-600"
                    : "text-orange-500"
                }`}
              >
                Status: {order.status}
              </p>

              <ul className="mt-3 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                {order.items.map((item, i) => (
  <li key={item._id || i}>
    {item.food?.name || item.name} × {item.quantity}
  </li>



                ))}
              </ul>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
