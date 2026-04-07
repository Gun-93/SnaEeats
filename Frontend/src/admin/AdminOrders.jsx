import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("token");

  // 🔄 Fetch all orders
  const fetchOrders = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/orders/admin/all",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setOrders(res.data || []);
    } catch (err) {
      alert("Error fetching orders");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // 🔁 Update order status
  const updateStatus = async (id) => {
  try {
    await axios.put(
      `http://localhost:5000/api/orders/admin/${id}`,
      { status: "Preparing" },   // 🔥 MUST SEND
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json", // 🔥 ADD THIS
        },
      }
    );

    fetchOrders();

  } catch (err) {
    console.log(err.response?.data); // 🔥 SHOW REAL ERROR
    alert(err.response?.data?.message || "Error updating status");
  }
};

  return (
    <AdminLayout>
      <div className="min-h-screen px-6 pb-10 pt-20 bg-white text-gray-800 dark:bg-black dark:text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">
            All Orders
          </h2>

          {orders.length === 0 && (
            <p className="text-gray-500 text-center">
              No orders found
            </p>
          )}

          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order._id}
                className="p-5 rounded-xl border shadow-sm bg-gray-100 dark:bg-gray-900"
              >
                {/* USER INFO */}
                <p className="font-semibold">
                  User:{" "}
                  <span className="font-normal">
                    {order.user?.name}
                  </span>
                </p>

                <p className="text-sm text-gray-600">
                  Email: {order.user?.email}
                </p>

                {/* ORDER INFO */}
                <p className="mt-2 font-semibold">
                  Total: ₹{order.total}
                </p>

                <p className="text-sm text-gray-600">
                  {new Date(order.createdAt).toLocaleString()}
                </p>

                <p className="mt-1 font-semibold text-yellow-500">
                  Status: {order.status}
                </p>

                {/* ITEMS */}
                <div className="mt-4">
                  <p className="font-semibold mb-1">Items:</p>
                  <ul className="list-disc pl-5 text-sm">
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.food?.name} × {item.quantity} (₹{item.food?.price})
                      </li>
                    ))}
                  </ul>
                </div>

                {/* ✅ ONLY PREPARING BUTTON */}
                <div className="mt-5">
                  <button
                    onClick={() => updateStatus(order._id)}
                    disabled={order.status !== "Pending"}
                    className={`px-4 py-2 rounded text-white ${
                      order.status === "Pending"
                        ? "bg-yellow-500 hover:bg-yellow-600"
                        : "bg-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Preparing
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}