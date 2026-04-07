import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Checkout({
  cartItems,
  handleRemove,
  handleQuantityChange,
}) {
  const navigate = useNavigate();

  // 🔥 ADDRESS STATE (ADDED – nothing removed)
  const [address, setAddress] = useState({
    house: "",
    area: "",
    city: "",
    pincode: "",
    landmark: "",
  });

  const total = cartItems.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  // ✅ SAVE CART BEFORE PAYMENT
localStorage.setItem("cartItems", JSON.stringify(cartItems));

  const handlePayment = async () => {
  if (cartItems.length === 0) return;

  if (
    !address.house ||
    !address.area ||
    !address.city ||
    !address.pincode
  ) {
    alert("Please enter delivery address");
    return;
  }

  localStorage.setItem("deliveryAddress", JSON.stringify(address));

  // ✅ THIS LINE IS THE FIX
  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  navigate("/payment");
};


  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 px-8 pb-8">

      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Your Cart
      </h2>

      <div
        className="
          max-w-4xl mx-auto
          bg-white dark:bg-gray-800
          text-gray-800 dark:text-gray-100
          rounded-xl shadow-md
          p-6 space-y-4
        "
      >
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">
            Your cart is empty.
          </p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item._id || item.id}
              className="flex justify-between items-center border-b py-4"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-green-600">
                    ₹{Number(item.price) || 0}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    handleQuantityChange(
                      item._id || item.id,
                      Math.max(1, item.quantity - 1)
                    )
                  }
                  className="px-3 py-1 border rounded"
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    handleQuantityChange(
                      item._id || item.id,
                      item.quantity + 1
                    )
                  }
                  className="px-3 py-1 border rounded"
                >
                  +
                </button>

                <button
                  onClick={() =>
                    handleRemove(item._id || item.id)
                  }
                  className="text-red-500 ml-4"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        {cartItems.length > 0 && (
          <div className="flex justify-between font-bold text-lg mt-6">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        )}

        {/* ================= DELIVERY ADDRESS (ADDED) ================= */}
        {cartItems.length > 0 && (
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4">
              Delivery Address
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="House / Flat No"
                value={address.house}
                onChange={(e) =>
                  setAddress({ ...address, house: e.target.value })
                }
                className="border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              />

              <input
                type="text"
                placeholder="Area / Street"
                value={address.area}
                onChange={(e) =>
                  setAddress({ ...address, area: e.target.value })
                }
                className="border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              />

              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
                className="border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              />

              <input
                type="text"
                placeholder="Pincode"
                value={address.pincode}
                onChange={(e) =>
                  setAddress({ ...address, pincode: e.target.value })
                }
                className="border rounded-lg p-3 dark:bg-gray-700 dark:text-white"
              />

              <input
                type="text"
                placeholder="Landmark (optional)"
                value={address.landmark}
                onChange={(e) =>
                  setAddress({ ...address, landmark: e.target.value })
                }
                className="border rounded-lg p-3 dark:bg-gray-700 dark:text-white md:col-span-2"
              />
            </div>
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full mt-6 py-3 bg-green-600 text-white font-bold rounded-lg"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
