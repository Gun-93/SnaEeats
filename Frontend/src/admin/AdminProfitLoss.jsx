import { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "./AdminLayout";

export default function AdminProfitLoss() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfitLoss = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Admin token not found. Please login again.");
          setLoading(false);
          return;
        }

        const res = await axios.get(
          "https://snaeeats.onrender.com//api/orders/profit-loss",
          {
            headers: { Authorization: `Bearer ${token}` }
          }
        );

        setData(res.data);
      } catch (err) {
        setError("Failed to load profit/loss data");
      } finally {
        setLoading(false);
      }
    };

    fetchProfitLoss();
  }, []);

  return (
    <AdminLayout>
      <div className="min-h-screen px-6 pt-20 bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold text-center mb-8">
            Profit / Loss Report
          </h1>

          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}

          {data && (
            <>
              {/* SUMMARY */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <Card title="Total Revenue" value={`₹${data.totalRevenue}`} color="green" />
                <Card title="Total Cost" value={`₹${data.totalCost}`} color="orange" />
                <Card
                  title={data.profit > 0 ? "Profit" : "Loss"}
                  value={`₹${data.profit}`}
                  color={data.profit > 0 ? "green" : "red"}
                />
              </div>

              {/* TABLE */}
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white">
                    <tr>
                      <th className="p-3">Item</th>
                      <th className="p-3">Qty</th>
                      <th className="p-3">Sell ₹</th>
                      <th className="p-3">Cost ₹</th>
                      <th className="p-3">Profit ₹</th>
                    </tr>
                  </thead>

                  <tbody className="text-gray-800 dark:text-white">
                    {data.items.map((item, i) => (
                      <tr key={i} className="border-t text-center">
                        <td className="p-3">
                          {item.name || "Legacy Order"}
                        </td>

                        <td className="p-3">{item.quantity}</td>

                        <td className="p-3">₹{item.sellPrice}</td>

                        <td className="p-3">₹{item.costPrice}</td>

                        <td
                          className={`p-3 font-semibold ${
                            item.profit >= 0
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          ₹{item.profit}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}

/* ✅ FIXED CARD COMPONENT */
function Card({ title, value, color }) {

  const colorClass =
    color === "green"
      ? "text-green-500"
      : color === "red"
      ? "text-red-500"
      : "text-orange-500";

  return (
    <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow text-center">
      <h2 className="text-gray-600 dark:text-gray-300">{title}</h2>

      <p className={`text-2xl font-bold mt-2 ${colorClass}`}>
        {value}
      </p>
    </div>
  );
}