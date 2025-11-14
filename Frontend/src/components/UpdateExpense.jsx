import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeUpdateModal, getExpenses } from "../redux/features/ExpenseSlice";
import axios from "axios";
import toast from "react-hot-toast";

function UpdateExpense() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.expenseModal.openUpdateModal);
  const selectedExpense = useSelector((state) => state.expenseModal.selectedExpense);

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

      const res = await axios.put(
        `http://localhost:5000/api/v1/expense/updateExpense/${selectedExpense.id}`,
        { title, amount, category, date },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success("Expense updated successfully!");
      dispatch(closeUpdateModal());
      dispatch(getExpenses());
      console.log(res.data);
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "Update failed");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={() => dispatch(closeUpdateModal())}
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-100 rounded-2xl shadow-lg w-full max-w-md p-6"
      >
        <div className="flex items-center justify-between border-b pb-3 mb-4">
          <h2 className="text-xl font-semibold text-blue-600">Update Expense</h2>
          <button onClick={() => dispatch(closeUpdateModal())}>✕</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Title"
          />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
            placeholder="Amount"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2 bg-gray-900"
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
            className="w-full border rounded-md px-3 py-2"
          />

          <div className="flex justify-end gap-3 border-t pt-4">
            <button
              type="button"
              onClick={() => dispatch(closeUpdateModal())}
              className="px-4 py-2 border rounded-md hover:bg-red-500 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
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
