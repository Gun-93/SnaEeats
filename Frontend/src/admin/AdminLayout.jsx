import React from "react";

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      {/* Navbar already exists above */}
      <main className="pt-6 px-4">
        {children}
      </main>
    </div>
  );
}

