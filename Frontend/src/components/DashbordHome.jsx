import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getExpenses,
  openModal,
  openUpdateModal,
} from "../redux/features/ExpenseSlice";
import {
  FaEdit,
  FaRupeeSign,
  FaShoppingCart,
  FaTrash,
  FaUtensils,
} from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { Link } from "react-router-dom";
import AddExpense from "./AddExpense";
import UpdateExpense from "./UpdateExpense";
import toast from "react-hot-toast";
import axios from "axios";

function DashboardHome() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const API = 'https://expence-tracker-9uzt.onrender.com';

  const { expenses = [], loading, error } = useSelector(
    (state) => state.expenseModal
  );

  const isOpen = useSelector((state) => state.expenseModal.openModal);

  const handleDelete = async (id) => {
    const token = user?.token;
    try {
      const res = await axios.delete(
        `${API}/api/v1/expense/deleteExpense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Expense Deleted Successfully!");
      dispatch(getExpenses());
    } catch (error) {
      toast.error(error.response?.data?.msg || "Failed to delete expense");
    }
  };

  const categoryTotals = expenses.reduce((acc, exp) => {
    const ctgry = exp.category || "Other";
    acc[ctgry] = (acc[ctgry] || 0) + parseFloat(exp.amount || 0);
    return acc;
  }, {});

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch, isOpen]);

  if (loading) return <p className="text-center text-gold">Loading...</p>;
  if (error) return <p className="text-red-400">{error}</p>;

  const totalExpense = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount || 0),
    0
  );

  return (
    <div className="flex flex-col gap-6 w-full p-6 min-h-screen 
      bg-[#0d0d0d] text-white">

      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl ml-8 font-bold text-[#d4af37] drop-shadow-lg">
          Dashboard Overview
        </h1>
        <button
          onClick={() => dispatch(openModal())}
          className="px-6 py-3 rounded-xl bg-linear-to-r 
            from-[#c8a232] to-[#d4af37] text-black font-semibold
            shadow-lg shadow-yellow-900/40 hover:scale-105
            transition-all duration-200"
        >
          + Add Expense
        </button>
      </div>

      <div className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-4
      ">
        {[
          {
            title: "Total Expense",
            value: totalExpense.toFixed(2),
            icon: <FaRupeeSign size={30} />,
          },
          {
            title: "Food",
            value: categoryTotals["Food"]?.toFixed(2) || 0,
            icon: <FaUtensils size={30} />,
          },
          {
            title: "Shopping",
            value: categoryTotals["Shopping"]?.toFixed(2) || 0,
            icon: <FaShoppingCart size={30} />,
          },
          {
            title: "Rent",
            value: categoryTotals["Rent"]?.toFixed(2) || 0,
            icon: <MdHomeWork size={30} />,
          },
          {
            title: "Other",
            value: categoryTotals["Other"]?.toFixed(2) || 0,
            icon: <MdHomeWork size={30} />,
          },
        ].map((card, i) => (
          <div
            key={i}
            className="p-5 rounded-2xl bg-[#111] border border-[#d4af37]/40
              shadow-lg shadow-black/50 flex items-center justify-between
              hover:border-[#d4af37] hover:shadow-yellow-900/40
              transition-all duration-200"
          >
            <div>
              <h3 className="text-xs text-gray-400 uppercase">{card.title}</h3>
              <p className="text-2xl font-bold text-[#d4af37]">
                ₹{card.value}
              </p>
            </div>
            <div className="text-[#d4af37]">{card.icon}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#111] rounded-2xl p-5 border border-[#d4af37]/30 shadow-lg shadow-black/40">
        <h2 className="text-xl font-semibold text-[#d4af37] mb-4">
          Recent Transactions
        </h2>

        {expenses.length ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left">
                <thead>
                  <tr className="border-b border-[#d4af37]/30 text-gray-300">
                    <th className="py-2">Title</th>
                    <th className="py-2">Category</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {expenses.slice(0, 5).map((exp, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#d4af37]/10 hover:bg-[#1a1a1a] transition"
                    >
                      <td className="py-3">{exp.title}</td>
                      <td className="py-3">{exp.category}</td>
                      <td className="py-3 text-[#d4af37] font-semibold">
                        ₹{exp.amount}
                      </td>
                      <td className="py-3">
                        {new Date(exp.date).toLocaleDateString("en-GB")}
                      </td>
                      <td className="py-3 flex gap-3">
                        <button
                          onClick={() => dispatch(openUpdateModal(exp))}
                          className="p-2 rounded-full bg-[#d4af37]/20 text-[#d4af37]
                            hover:bg-[#d4af37] hover:text-black transition-all"
                        >
                          <FaEdit />
                        </button>

                        <button
                          onClick={() => handleDelete(exp.id)}
                          className="p-2 rounded-full bg-red-700/30 text-red-400
                            hover:bg-red-600 hover:text-white transition-all"
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {expenses.length >= 5 && (
              <div className="flex justify-end mt-3">
                <Link
                  to="/dashbord/history"
                  className="text-[#d4af37] hover:underline"
                >
                  Show More »
                </Link>
              </div>
            )}
          </>
        ) : (
          <p className="text-gray-400">No recent transactions found.</p>
        )}
      </div>

      <AddExpense />
      <UpdateExpense />
    </div>
  );
}

export default DashboardHome;
