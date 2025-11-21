import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/features/ExpenseSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { getExpenses } from "../redux/features/ExpenseSlice";

function AddExpense() {
  const isOpen = useSelector((state) => state.expenseModal.openModal);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date) {
      return toast.error("All fields are mandatory");
    }

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (!token) return toast.error("Token missing!");

      const res = await axios.post(
        "http://localhost:4000/api/v1/expense/addExpense",
        { title, amount, category, date },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Expense Added Successfully");
      dispatch(getExpenses());

      setTimeout(() => dispatch(closeModal()), 300);
    } catch (error) {
      console.error("❌ Error adding expense:", error);
      toast.error(error.response?.data?.msg || "Something went wrong");
    }
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={() => dispatch(closeModal())}
          className="fixed inset-0 z-50 flex items-center justify-center 
                     bg-black/70 backdrop-blur-sm px-4"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-[#141415] text-[#F9F6EF] 
                       rounded-2xl shadow-lg shadow-[#D8A35D]/20 
                       w-full max-w-md p-6 animate-fadeIn border border-[#2a2a2e]"
          >

            <div className="flex items-center justify-between border-b border-[#2a2a2e] pb-3 mb-4">
              <h2 className="text-xl font-semibold text-[#D8A35D]">
                Add New Expense
              </h2>
              <button
                onClick={() => dispatch(closeModal())}
                className="text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#A0937D] mb-1">
                  Title
                </label>
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="e.g. Grocery shopping"
                  className="w-full border border-[#2a2a2e] bg-[#0E0E0F] text-[#F9F6EF]
                             rounded-md px-3 py-2 text-sm placeholder-gray-500 
                             focus:outline-none focus:ring-2 focus:ring-[#D8A35D]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A0937D] mb-1">
                  Amount
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  placeholder="e.g. 1200"
                  className="w-full border border-[#2a2a2e] bg-[#0E0E0F] text-[#F9F6EF]
                             rounded-md px-3 py-2 text-sm placeholder-gray-500 
                             focus:outline-none focus:ring-2 focus:ring-[#D8A35D]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A0937D] mb-1">
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full border border-[#2a2a2e] bg-[#0E0E0F] text-[#F9F6EF]
                             rounded-md px-3 py-2 text-sm focus:outline-none 
                             focus:ring-2 focus:ring-[#D8A35D]"
                >
                  <option value="">Select Category</option>
                  <option value="Food">🍔 Food</option>
                  <option value="Rent">🏠 Rent</option>
                  <option value="Shopping">🛍️ Shopping</option>
                  <option value="Other">💡 Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#A0937D] mb-1">
                  Date
                </label>
                <input
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="w-full border border-[#2a2a2e] bg-[#0E0E0F] text-[#F9F6EF]
                             rounded-md px-3 py-2 text-sm focus:outline-none 
                             focus:ring-2 focus:ring-[#D8A35D]"
                />
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-[#2a2a2e]">
                <button
                  type="button"
                  onClick={() => dispatch(closeModal())}
                  className="px-4 py-2 rounded-md border border-[#2a2a2e] text-[#A0937D]
                             hover:bg-red-500 hover:text-white transition"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-[#D8A35D] text-black font-semibold
                             hover:bg-[#c18f4f] shadow-md hover:shadow-[#D8A35D]/40 transition"
                >
                  Add Expense
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default AddExpense;
