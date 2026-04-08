import React, { useState } from "react";
import axios from "axios"; 

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [isPaid, setIsPaid] = useState(false);

  const handlePayment = async (e) => {
  e.preventDefault();

  if (!cardNumber || !expiry || !cvv || !name) {
    alert("Please fill in all fields!");
    return;
  }

  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (!user || !cartItems || cartItems.length === 0) {
      alert("Your cart is empty");
      return;
    }

    // ✅ FIXED ORDER DATA (VERY IMPORTANT)
      const orderData = {
        user: user._id,
       items: cartItems.map(item => ({
  food: item._id,
  name: item.name,        // 🔥 MUST
  price: item.price,      // 🔥 MUST
  quantity: item.quantity
}))

      };

    await axios.post("https://snaeeats.onrender.com/api/orders", orderData);

    // ✅ CLEANUP
    localStorage.removeItem("cartItems");

    setTimeout(() => {
      setIsPaid(true);
    }, 800);

  } catch (err) {
    alert("Payment failed");
  }
};


  if (isPaid) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-green-600">
          Payment Successful ✅
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Thank you for your purchase!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handlePayment}
      className="
        max-w-md mx-auto mt-8 p-6
        shadow-lg rounded-2xl
        bg-white dark:bg-gray-800
      "
    >
      

      {/* Cardholder Name */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Cardholder Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="John Doe"
          className="
            w-full p-2 rounded-md
            border border-gray-300 dark:border-gray-600
            bg-gray-50 dark:bg-gray-700
            text-gray-800 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {/* Card Number */}
      <div className="mb-4">
        <label className="block text-gray-700 dark:text-gray-300 mb-1">
          Card Number
        </label>
        <input
          type="text"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          placeholder="1234 5678 9012 3456"
          maxLength="19"
          className="
            w-full p-2 rounded-md
            border border-gray-300 dark:border-gray-600
            bg-gray-50 dark:bg-gray-700
            text-gray-800 dark:text-white
            focus:outline-none focus:ring-2 focus:ring-blue-500
          "
        />
      </div>

      {/* Expiry + CVV */}
      <div className="flex gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            Expiry Date
          </label>
          <input
            type="month"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            className="
              w-full p-2 rounded-md
              border border-gray-300 dark:border-gray-600
              bg-gray-50 dark:bg-gray-700
              text-gray-800 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>

        <div className="flex-1">
          <label className="block text-gray-700 dark:text-gray-300 mb-1">
            CVV
          </label>
          <input
            type="password"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            placeholder="123"
            maxLength="3"
            className="
              w-full p-2 rounded-md
              border border-gray-300 dark:border-gray-600
              bg-gray-50 dark:bg-gray-700
              text-gray-800 dark:text-white
              focus:outline-none focus:ring-2 focus:ring-blue-500
            "
          />
        </div>
      </div>

      {/* Button */}
      <button
        className="
          w-full bg-blue-600 hover:bg-blue-700
          text-white font-semibold
          py-3 rounded-lg
          transition
        "
      >
        Pay Now
      </button>
    </form>
  );
}
