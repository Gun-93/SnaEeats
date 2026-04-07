import React from "react";
import PaymentForm from "../components/PaymentForm";

export default function Payment() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-32 px-8 pb-8">
     <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center mb-6">
  Payment Details
</h2>


      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
        <PaymentForm />
      </div>
    </div>
  );
}
