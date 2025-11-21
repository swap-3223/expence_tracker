// import React, { useEffect, useState } from "react";
// import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
// import { MdAccountBalanceWallet } from "react-icons/md";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
// import { getExpenses,openUpdateModal } from "../redux/features/ExpenseSlice";
// import UpdateExpense from "./UpdateExpense";
// import toast from "react-hot-toast";


// function History() {  
//   const user = JSON.parse(localStorage.getItem("user"));
//   const dispatch = useDispatch();
//   const {
//       expenses = [],
//       loading,
//       error,
//     } = useSelector((state) => state.expenseModal);
// const isOpen = useSelector((state) => state.expenseModal.openModal);


//     const handleDelete = async (id) => {
//       const token = user?.token;
//       try {
//         const res = await axios.delete(
//           `http://localhost:5000/api/v1/expense/deleteExpense/${id}`,
//           {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         toast.success("Expense Deleted Successfully!");
//         dispatch(getExpenses());
//         console.log(res.data);
//       } catch (error) {
//         console.error(error);
//         toast.error(error.response?.data?.msg || "Failed to delete expense");
//       }
//     };

//   useEffect(() => {
//     dispatch(getExpenses());
//   }, [dispatch, isOpen]);
    
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;
//     const totalExpense = expenses.reduce(
//       (sum, exp) => sum + parseFloat(exp.amount || 0),
//       0
//     );
//   const cards = [
//     {
//       title: "Total Income",
//       value: "This feature comming soon",
//       icon: <GiReceiveMoney size={36} className="text-green-500" />,
//       color: "bg-green-100",
//     },
//     {
//       title: "Total Expenses",
//       value: `₹${totalExpense}`,
//       icon: <GiPayMoney size={36} className="text-red-500" />,
//       color: "bg-red-100",
//     },
//     {
//       title: "Balance",
//       value: "This feature comming soon",
//       icon: <MdAccountBalanceWallet size={36} className="text-blue-600" />,
//       color: "bg-blue-100",
//     },
//   ];

//   return (
//     <div className="w-full min-h-screen bg-gray-50 p-6">
//       <h1 className="text-2xl font-bold text-slate-800 mb-6">Transaction Summary</h1>

//       {/* ✅ Responsive grid for cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`flex items-center gap-4 p-6 rounded-xl border border-gray-200 shadow-sm ${card.color} hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
//           >
//             {/* Icon */}
//             <div className="p-3 bg-white rounded-full shadow-sm">{card.icon}</div>

//             {/* Text */}
//             <div className="flex flex-col">
//               <span className="text-gray-600 text-sm font-medium">{card.title}</span>
//               <span className="text-xl font-semibold text-slate-800">{card.value}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//         <div className="mt-8 bg-white shadow-md rounded-xl p-5">
//   <h2 className="text-lg md:text-xl font-semibold text-slate-800 mb-4">
//     Recent Transactions
//   </h2>

//   {expenses.length !== 0 ? (
//     <>
//       {/* TABLE WRAPPER FOR MOBILE SCROLL */}
//       <div className="overflow-x-auto">
//         <table className="w-full text-left text-slate-700 min-w-[600px] sm:min-w-full">
//           <thead>
//             <tr className="border-b text-xs sm:text-sm text-gray-500 uppercase">
//               <th className="py-2">Title</th>
//               <th className="py-2">Category</th>
//               <th className="py-2">Amount</th>
//               <th className="py-2">Date</th>
//               <th className="py-2">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {expenses.map((exp, index) => (
//               <tr
//                 key={index}
//                 className="border-b hover:bg-gray-50 transition"
//               >
//                 <td className="py-3 text-sm sm:text-base">{exp.title}</td>
//                 <td className="py-3 text-sm sm:text-base">{exp.category}</td>
//                 <td className="py-3 text-red-600 font-semibold text-sm sm:text-base">
//                   {exp.amount}
//                 </td>
//                 <td className="py-3 text-sm sm:text-base">
//                   {new Date(exp.date).toLocaleDateString("en-GB")}
//                 </td>

//                 {/* ACTION BUTTONS RESPONSIVE */}
//                 <td className="py-3 flex items-center gap-2 sm:gap-3">
//                   <button
//                     onClick={() => dispatch(openUpdateModal(exp))}
//                     className="p-1.5 sm:p-2 rounded-full bg-blue-50 text-blue-600 
//                                hover:bg-blue-600 hover:text-white hover:scale-110 
//                                transition-all duration-150 shadow-sm"
//                     title="Edit"
//                   >
//                     <FaEdit size={14} className="sm:size-16 md:size-5" />
//                   </button>

//                   <button
//                     onClick={() => handleDelete(exp.id)}
//                     className="p-1.5 sm:p-2 rounded-full bg-red-50 text-red-600 
//                                hover:bg-red-600 hover:text-white hover:scale-110 
//                                transition-all duration-150 shadow-sm"
//                     title="Delete"
//                   >
//                     <FaTrash size={14} className="sm:size-16 md:size-5" />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   ) : (
//     <div className="text-gray-500 text-sm">No recent transactions found.</div>
//   )}
// </div>
//       <UpdateExpense/>

//     </div>
//   );
// }

// export default History;
import React, { useEffect } from "react";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses, openUpdateModal } from "../redux/features/ExpenseSlice";
import UpdateExpense from "./UpdateExpense";
import toast from "react-hot-toast";

function History() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();

  const { expenses = [], loading, error } = useSelector(
    (state) => state.expenseModal
  );

  const isOpen = useSelector((state) => state.expenseModal.openModal);

  const handleDelete = async (id) => {
    const token = user?.token;
    try {
      const res = await axios.delete(
        `http://localhost:5000/api/v1/expense/deleteExpense/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Expense Deleted Successfully!");
      dispatch(getExpenses());
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.msg || "Failed to delete expense");
    }
  };

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch, isOpen]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalExpense = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount || 0),
    0
  );

  const cards = [
    {
      title: "Total Income",
      value: "This feature coming soon",
      icon: <GiReceiveMoney size={36} className="text-[#6D9773]" />,
      color: "bg-[#111111]",
    },
    {
      title: "Total Expenses",
      value: `₹${totalExpense}`,
      icon: <GiPayMoney size={36} className="text-red-500" />,
      color: "bg-[#111111]",
    },
    {
      title: "Balance",
      value: "This feature coming soon",
      icon: <MdAccountBalanceWallet size={36} className="text-[#FFBA00]" />,
      color: "bg-[#111111]",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black p-6 text-[#EDEDED]">
      <h1 className="text-2xl font-bold text-[#FFBA00] mb-6">
        Transaction Summary
      </h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-6 rounded-xl border border-neutral-800 shadow-sm ${card.color} hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="p-3 bg-black rounded-full shadow-sm border border-neutral-800">
              {card.icon}
            </div>

            <div className="flex flex-col">
              <span className="text-gray-400 text-sm font-medium">
                {card.title}
              </span>
              <span className="text-xl font-semibold text-[#FFBA00]">
                {card.value}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Recent Transactions */}
      <div className="mt-8 bg-[#111111] shadow-md rounded-xl p-5 border border-neutral-800">
        <h2 className="text-lg md:text-xl font-semibold text-[#FFBA00] mb-4">
          Recent Transactions
        </h2>

        {expenses.length !== 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-[#EDEDED] min-w-[600px] sm:min-w-full">
                <thead>
                  <tr className="border-b border-neutral-800 text-xs sm:text-sm text-gray-400 uppercase">
                    <th className="py-2">Title</th>
                    <th className="py-2">Category</th>
                    <th className="py-2">Amount</th>
                    <th className="py-2">Date</th>
                    <th className="py-2">Action</th>
                  </tr>
                </thead>

                <tbody>
                  {expenses.map((exp, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#333] hover:bg-[#1A1A1A] transition"
                    >
                      <td className="py-3">{exp.title}</td>
                      <td className="py-3">{exp.category}</td>
                      <td className="py-3 text-red-500 font-semibold">
                        {exp.amount}
                      </td>
                      <td className="py-3">
                        {new Date(exp.date).toLocaleDateString("en-GB")}
                      </td>

                      <td className="py-3 flex items-center gap-2 sm:gap-3">
                        {/* Edit */}
                        <button
                          onClick={() => dispatch(openUpdateModal(exp))}
                          className="p-1.5 sm:p-2 rounded-full bg-black text-[#FFBA00] 
                                     border border-neutral-800
                                     hover:bg-[#FFBA00] hover:text-black hover:scale-110 
                                     transition-all duration-150 shadow-sm"
                          title="Edit"
                        >
                          <FaEdit size={14} />
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(exp.id)}
                          className="p-1.5 sm:p-2 rounded-full bg-black text-red-500 
                                     border border-red-500
                                     hover:bg-red-600 hover:text-white hover:scale-110 
                                     transition-all duration-150 shadow-sm"
                          title="Delete"
                        >
                          <FaTrash size={14} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="text-gray-500 text-sm">
            No recent transactions found.
          </div>
        )}
      </div>

      <UpdateExpense />
    </div>
  );
}

export default History;
