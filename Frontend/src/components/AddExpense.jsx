import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/features/ExpenseSlice";
import axios from "axios";
import toast from "react-hot-toast";
import { getExpenses } from "../redux/features/ExpenseSlice";
function AddExpense() {
  const isOpen = useSelector((state) => state.expenseModal.openModal);
  const dispatch = useDispatch();
  const [title,setTitle] = useState('')
  const [ amount,setAmount] = useState('')
  const [category,setCategory] = useState('')
  const [date,setDate] = useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(!title || !amount || !category || !date){
      return toast.error("All fields are mendetory")
    }
    try{
      const user =JSON.parse(localStorage.getItem('user'))
      const token = user?.token;

      if(!token){
        toast.error("Token not provided :(")
      }
      const res = await axios.post('http://localhost:5000/api/v1/expense/addExpense',
        {title,amount,category,date},{
          headers:{
            Authorization:`Bearer ${token}`
          }
        }
      )
    console.log(res)
    toast.success("Expense Added Successfully")
    setTimeout(() => {
      dispatch(closeModal())
      
    }, 300);
    dispatch(getExpenses())
  }catch(error){
    console.error("❌ Error adding expense:", error.response?.data || error.message);
    toast.error(error.response?.data?.msg || "Something went wrong");
  }
}

  return (
    <>
      {isOpen && (
        <div
          onClick={() => dispatch(closeModal())}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white dark:bg-gray-900 text-slate-800 dark:text-gray-100 rounded-2xl shadow-lg w-full max-w-md p-6 animate-fadeIn"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b pb-3 mb-4">
              <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
                Add New Expense
              </h2>
              <button
                onClick={() => dispatch(closeModal())}
                className="text-gray-400 hover:text-red-500 transition"
              >
                ✕
              </button>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Title
                </label>
                <input
                  onChange={(e)=>{e.preventDefault(); setTitle(e.target.value)}}
                  type="text"
                  placeholder="e.g. Grocery shopping"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Amount
                </label>
                <input
                  onChange={(e)=>{e.preventDefault(); setAmount(e.target.value)}}
                  type="number"
                  placeholder="e.g. 1200"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Category
                </label>
                <select                   
                  onChange={(e)=>{e.preventDefault(); setCategory(e.target.value)}}
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Select Category</option>
                  <option value="Food">🍔 Food</option>
                  <option value="Rent">🏠 Rent</option>
                  <option value="Shopping">🛍️ Shopping</option>
                  <option value="Other">💡 Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Date
                </label>
                <input
                  onChange={(e)=>{e.preventDefault(); setDate(e.target.value)}}
                  type="date"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={() => dispatch(closeModal())}
                  className="px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 hover:bg-red-500 hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
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
