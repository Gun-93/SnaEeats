import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Admin Dashboard
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">

        {/* ADD FOOD */}
        <div
          onClick={() => navigate("/admin/add-food")}
          className="cursor-pointer bg-white rounded-xl shadow-md p-8 
                     hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Add Food
          </h2>
          <p className="text-gray-600">
            Add new food items to menu
          </p>
        </div>

        {/* MANAGE FOOD */}
        <div
          onClick={() => navigate("/admin/manage-food")}
          className="cursor-pointer bg-white rounded-xl shadow-md p-8 
                     hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <h2 className="text-xl font-bold text-orange-500 mb-2">
            Manage Food
          </h2>
          <p className="text-gray-600">
            View, edit & delete food items
          </p>
        </div>

        {/* VIEW ORDERS */}
        <div
          onClick={() => navigate("/admin/orders")}
          className="cursor-pointer bg-white rounded-xl shadow-md p-8 
                     hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <h2 className="text-xl font-bold text-black mb-2">
            View Orders
          </h2>
          <p className="text-gray-600">
            Manage customer orders
          </p>
        </div>

        {/* PROFIT & LOSS */}
        <div
          onClick={() => navigate("/admin/profit-loss")}
          className="cursor-pointer bg-white rounded-xl shadow-md p-8 
                     hover:shadow-xl hover:-translate-y-1 transition text-center"
        >
          <h2 className="text-xl font-bold text-green-600 mb-2">
            Profit & Loss
          </h2>
          <p className="text-gray-600">
            View business earnings
          </p>
        </div>

      </div>
    </div>
  );
}
