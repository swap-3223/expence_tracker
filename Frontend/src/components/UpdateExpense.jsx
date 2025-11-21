import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeUpdateModal, getExpenses } from "../redux/features/ExpenseSlice";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateExpense() {
  const dispatch = useDispatch();
  const API = 'https://expence-tracker-9uzt.onrender.com';

  const isOpen = useSelector((state) => state.expenseModal.openUpdateModal);
  const selectedExpense = useSelector(
    (state) => state.expenseModal.selectedExpense
  );

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (selectedExpense) {
      setTitle(selectedExpense.title || "");
      setAmount(selectedExpense.amount || "");
      setCategory(selectedExpense.category || "");
      setDate(selectedExpense.date?.slice(0, 10) || "");
    }
  }, [selectedExpense]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount || !category || !date)
      return toast.error("All fields are required");

    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      await axios.put(
        `${API}/api/v1/expense/updateExpense/${selectedExpense.id}`,
        { title, amount, category, date },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Expense updated successfully!");
      dispatch(closeUpdateModal());
      dispatch(getExpenses());
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "Update failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={() => dispatch(closeUpdateModal())}
      className="
        fixed inset-0 z-999 flex items-center justify-center 
        bg-black/60 backdrop-blur-md px-4
      "
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          relative w-full max-w-md p-6 rounded-2xl 
          bg-[#1B1B1D]/95 text-[#F9F6EF]
          shadow-[0_8px_30px_rgba(0,0,0,0.65)]
          border border-[#A0937D]/40
        "
      >
        <div
          className="
            flex items-center justify-between 
            border-b border-[#A0937D]/40 pb-3 mb-4
          "
        >
          <h2 className="text-xl font-semibold text-[#D8A35D] drop-shadow">
            Update Expense
          </h2>
          <button
            onClick={() => dispatch(closeUpdateModal())}
            className="text-[#D8A35D] text-xl hover:text-[#F9F6EF] transition"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="
              w-full px-3 py-2 rounded-md bg-transparent
              border border-[#A0937D]/40
              text-[#F9F6EF]
              focus:border-[#D8A35D] focus:outline-none
              transition
            "
            placeholder="Title"
          />

          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="
              w-full px-3 py-2 rounded-md bg-transparent
              border border-[#A0937D]/40
              text-[#F9F6EF]
              focus:border-[#D8A35D] focus:outline-none
              transition
            "
            placeholder="Amount"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              w-full px-3 py-2 rounded-md 
              bg-[#1B1B1D] text-[#F9F6EF]
              border border-[#A0937D]/40
              focus:border-[#D8A35D] focus:outline-none
              transition
            "
          >
            <option value="">Select Category</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Shopping">Shopping</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="
              w-full px-3 py-2 rounded-md bg-transparent
              border border-[#A0937D]/40
              text-[#F9F6EF]
              focus:border-[#D8A35D] focus:outline-none
              transition
            "
          />

          <div
            className="
              flex justify-end gap-3 
              border-t border-[#A0937D]/40 pt-4
            "
          >
            <button
              type="button"
              onClick={() => dispatch(closeUpdateModal())}
              className="
                px-4 py-2 rounded-md border border-[#A0937D]/40
                text-[#F9F6EF]
                hover:bg-red-600 hover:border-red-600
                transition
              "
            >
              Cancel
            </button>

            <button
              type="submit"
              className="
                px-5 py-2 rounded-md 
                bg-[#D8A35D] text-[#1B1B1D]
                shadow-[0_0_12px_rgba(216,163,93,0.65)]
                hover:bg-[#F9F6EF]
                transition
                font-semibold
              "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateExpense;
