import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getExpenses,openModal,openUpdateModal} from "../redux/features/ExpenseSlice";
import {FaEdit, FaRupeeSign, FaShoppingCart, FaTrash, FaUtensils } from "react-icons/fa";
import { MdHomeWork } from "react-icons/md";
import { Link, Navigate } from "react-router-dom";
import AddExpense from "./AddExpense";
import UpdateExpense from "./UpdateExpense";
import toast, {} from "react-hot-toast"
import axios from "axios";

  function DashbordHome() {
    const user = JSON.parse(localStorage.getItem('user'))
    const dispatch = useDispatch();
    const {
      expenses = [],
      loading,
      error,
    } = useSelector((state) => state.expenseModal);

    const isOpen = useSelector((state) => state.expenseModal.openModal);

    const handleDelete=async(id)=>{
      const token = user?.token;
    try {
      const res = await axios.delete(`http://localhost:5000/api/v1/expense/deleteExpense/${id}`,
      {headers:{
        Authorization:`Bearer ${token}`
      }}
    )
    toast.success("Expense Deleted Successfully!")
    dispatch(getExpenses())
    console.log(res.data);
  } catch (error) {
    console.error(error);
    toast.error(error.response?.data?.msg || "Failed to delete expense");
  }
};

  //Category-wise Data
    const categoryTotals = expenses.reduce((acc,exp)=>{
      const ctgry = exp.category || "Other";
      acc[ctgry] = (acc[ctgry] || 0) + parseFloat(exp.amount || 0);
      return acc;
    },{})

    useEffect(() => {
      dispatch(getExpenses());
    }, [dispatch, isOpen]);

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
          <h1 className="text-2xl font-bold text-slate-800">
            Dashboard Overview
          </h1>
          <button
            onClick={() => dispatch(openModal())}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-md transition-all duration-200"
          >
            + Add Expense
          </button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-4">
          {/* Total Expense */}
          <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-blue-500">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Total Expense</h3>
              <p className="text-2xl font-bold text-slate-800">
                ₹{totalExpense.toFixed(2)}
              </p>
            </div>
            <FaRupeeSign size={30} className="text-blue-500" />
          </div>

          {/* Food */}
          <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-green-500">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Food</h3>
              <p className="text-2xl font-bold text-slate-800">
                ₹{categoryTotals["Food"]?.toFixed(2) || 0}
              </p>
            </div>
            <FaUtensils size={30} className="text-green-500" />
          </div>

          {/* Shopping */}
          <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-yellow-500">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Shopping</h3>
            <p className="text-2xl font-bold text-slate-800">₹{categoryTotals["Shopping"]?.toFixed(2) || 0}</p>
            </div>
            <FaShoppingCart size={30} className="text-yellow-500" />
          </div>

          {/* Rent */}
          <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-purple-500">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Rent</h3>
              <p className="text-2xl font-bold text-slate-800">₹{categoryTotals["Rent"]?.toFixed(2) || 0}</p>
            </div>
            <MdHomeWork size={30} className="text-purple-500" />
          </div>

          {/* Other */}
          <div className="p-5 bg-white shadow-md rounded-xl flex items-center justify-between border-l-4 border-pink-500">
            <div>
              <h3 className="text-sm text-gray-500 uppercase">Other</h3>
              <p className="text-2xl font-bold text-slate-800">₹{categoryTotals["Other"]?.toFixed(2) || 0}</p>
            </div>
            <MdHomeWork size={30} className="text-pink-500" />
          </div>
        </div>
        {/* Recent Transactions */}
        <div className="mt-8 bg-white shadow-md rounded-xl p-5">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">
            Recent Transactions
          </h2>

          {expenses.length !==0 ? <><table className="w-full text-left text-slate-700">
            <thead>
              <tr className="border-b text-sm text-gray-500 uppercase">
                <th className="py-2">Title</th>
                <th className="py-2">Category</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {expenses.slice(0, 5).map((exp, index) => (
                <tr key={index} className="border-b hover:bg-gray-50 transition">
                  <td className="py-3">{exp.title}</td>
                  <td className="py-3">{exp.category}</td>
                  <td className="py-3 text-red-600 font-semibold">
                    {exp.amount}
                  </td>
                  <td className="py-3">
                    {" "}
                    {new Date(exp.date).toLocaleDateString("en-GB")}
                  </td>
                  <td className="py-3 flex items-center gap-3 justify-start">
  <button
    onClick={() => dispatch(openUpdateModal(exp))}
    className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all duration-100 shadow-sm"
    title="Edit"
  >
    <FaEdit size={16} />
  </button>
  <button

    onClick={() => handleDelete(exp.id)}
    className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-600 hover:text-white hover:scale-110 transition-all duration-300 shadow-sm"
    title="Delete"
  >
    <FaTrash size={16} />
  </button>
</td>

                </tr>
                
              ))}
            </tbody>
          </table>
          {expenses.length >= 5 ? <div className="w-full flex justify-end">
            <Link
              to="/dashbord/history"
              className="text-blue-600 text-sm font-medium hover:text-blue-800 hover:underline transition-all duration-200"
            >
              Show More <span className="text-2xl">»</span>
            </Link>
          </div>: ""}</> 
          : <div className="text-gray-500 text-sm">No recent transactions found.</div>}
        </div>
        <AddExpense />
<UpdateExpense />
      </div>
    );
  }

  export default DashbordHome;
