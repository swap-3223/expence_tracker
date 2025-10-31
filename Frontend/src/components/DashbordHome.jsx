import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses, openModal } from "../redux/features/ExpenseSlice";
import { FaRupeeSign, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";

function DashbordHome() {
  const dispatch = useDispatch();
  const {expenses=[],loading,error} = useSelector((state)=>state.expenseModal);

    useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
 const totalExpense = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount || 0),
    0
  );

  return (
    <div className="flex flex-col gap-6 w-full p-6 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard Overview</h1>
        <button
          onClick={() => dispatch(openModal())}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200"
        >
          + Add Expense
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-blue-500">
          <div>
            <h3 className="text-sm text-gray-500 uppercase">Total Expense</h3>
            <p className="text-2xl font-bold text-slate-800">₹{totalExpense.toFixed(2)}</p>
          </div>
          <FaRupeeSign size={30} className="text-blue-500" />
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-green-500">
          <div>
            <h3 className="text-sm text-gray-500 uppercase">Food</h3>
            <p className="text-2xl font-bold text-slate-800">₹3,200</p>
          </div>
          <FaUtensils size={30} className="text-green-500" />
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-yellow-500">
          <div>
            <h3 className="text-sm text-gray-500 uppercase">Shopping</h3>
            <p className="text-2xl font-bold text-slate-800">₹4,000</p>
          </div>
          <FaShoppingCart size={30} className="text-yellow-500" />
        </div>

        <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-purple-500">
          <div>
            <h3 className="text-sm text-gray-500 uppercase">Rent</h3>
            <p className="text-2xl font-bold text-slate-800">₹5,300</p>
          </div>
          <MdHomeWork size={30} className="text-purple-500" />
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-5">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Recent Transactions
        </h2>

        <table className="w-full text-left text-slate-700">
          <thead>
            <tr className="border-b text-sm text-gray-500 uppercase">
              <th className="py-2">Title</th>
              <th className="py-2">Category</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp,index)=>(
              <tr key={index} className="border-b hover:bg-gray-50 transition">
              <td className="py-3">{exp.title}</td>
              <td className="py-3">{exp.category}</td>
              <td className="py-3 text-red-600 font-semibold">{exp.amount}</td>
              <td className="py-3">  {new Date(exp.date).toLocaleDateString("en-GB")}
</td>
            </tr>
            ))}
            {/* <tr className="border-b hover:bg-gray-50 transition">
              <td className="py-3">Zara Shopping</td>
              <td className="py-3">Shopping</td>
              <td className="py-3 text-red-600 font-semibold">₹2,800</td>
              <td className="py-3">2025-10-14</td>
            </tr>
            <tr className="hover:bg-gray-50 transition">
              <td className="py-3">Flat Rent</td>
              <td className="py-3">Rent</td>
              <td className="py-3 text-red-600 font-semibold">₹5,300</td>
              <td className="py-3">2025-10-10</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashbordHome;
