// // import React, { useState } from 'react'
// // import { useSelector, useDispatch } from 'react-redux';
// // import { closeModal, openModal } from '../redux/features/ExpenseSlice';
// // function AddExpense() {
// // const isOpen =  useSelector((state)=>state.expenseModal.value)
// // const dispatch = useDispatch();

// //   return (
// //     <>
// //       {/* Open Button */}
// //       <button
// //         onClick={()=>dispatch(openModal())}
// //         className="rounded-md bg-slate-800 py-2 px-4 text-white text-sm shadow-md hover:bg-slate-700"
// //       >
// //         Add Expense
// //       </button>

// //       {/* Modal Overlay */}
// //       {isOpen && (
// //         <div
// //            // closes when clicking outside
// //           className="fixed inset-0 z-[999] grid place-items-center bg-black/60 backdrop-blur-sm"
// //         >
// //           {/* Modal Box */}
// //           <div
// //             onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
// //             className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
// //           >
// //             {/* Header */}
// //             <div className="flex items-start justify-between p-4">
// //               <div className="flex w-full justify-center">
// //                 <h5 className="text-xl font-medium text-slate-800">
// //                   Add Your Expense
// //                 </h5>
// //               </div>
// //               {/* <button
// //                 onClick={() => setIsOpen(false)}
// //                 className="rounded-lg text-slate-500 cpoi p-1"
// //               >
// //                 ✕
// //               </button> */}
// //             </div>

// //             {/* Modal Content */}
// //             <div className="px-4 pb-6 text-black">
// //               <label className="pt-3 text-xs uppercase  text-slate-500">Title</label>

// //               <input className="placeholder:text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" placeholder="Title"/>

// //               <label className="pt-3 text-xs uppercase text-slate-500">Amount</label>

// //               <input className="placeholder:text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" placeholder="Amount"/>

// //               <label className="pt-3 text-xs uppercase text-slate-500">Category</label>

// //               <input />
// //               <select className="text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" >      
// //                 <option value="" >Select</option>
// //                 <option value="Food">Food</option>
// //                 <option value="Rent">Rent</option>
// //                 <option value="Shopping">Shopping</option>
// //                 <option value="other">other</option>

// //               </select>

// //               <label className="pt-3 text-xs uppercase text-slate-500">Date</label>

// //               <input className="text-blue-400 w-full mb-3 flex items-center justify-start border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="date"/>

              
// //               <div className="w-full flex justify-between">
// //                 <button className=" w-32 mt-2 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md bg-blue-400 cursor-pointer hover:bg-white text-white hover:text-slate-800">
// //                 Add Expense
// //               </button>
// //               <button onClick={()=>dispatch(closeModal())}
// //                className="w-32 mt-2 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md cursor-pointer hover:bg-red-500 hover:text-white">
// //                 Cancel
// //               </button>
// //               </div>

              
// //             </div>

// //             {/* Footer */}
// //             {/* <div className="flex justify-between items-center px-4 py-3 border-t text-slate-500">
// //               <p className="text-sm">New to Ethereum wallets?</p>
// //               <button className="rounded-md border border-slate-300 py-1 px-3 text-sm hover:bg-slate-800 hover:text-white">
// //                 Learn More
// //               </button>
// //             </div> */}
// //           </div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }


// // export default AddExpense

// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { closeModal } from '../redux/features/ExpenseSlice';

// function AddExpense() {
//   // const isOpen = useSelector((state) => state.expenseModal.value);
//   const isOpen = useSelector((state) => state.expenseModal.value);

//   const dispatch = useDispatch();

//   return (
//     <>
//       {/* Modal Overlay */}
//       {isOpen && (
//         <div
//           onClick={() => dispatch(closeModal())}
//           className="fixed inset-0 z-[999] grid place-items-center bg-black/60 backdrop-blur-sm"
//         >
//           {/* Modal Box */}
//           <div
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//             className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
//           >
//             {/* Header */}
//             <div className="flex items-start justify-between p-4">
//               <div className="flex w-full justify-center">
//                 <h5 className="text-xl font-medium text-slate-800">
//                   Add Your Expense
//                 </h5>
//               </div>
//             </div>

//             {/* Modal Content */}
//             <div className="px-4 pb-6 text-black">
//               <label className="pt-3 text-xs uppercase text-slate-500">Title</label>
//               <input
//                 className="placeholder:text-blue-400 w-full mb-3 border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white"
//                 type="text"
//                 placeholder="Title"
//               />

//               <label className="pt-3 text-xs uppercase text-slate-500">Amount</label>
//               <input
//                 className="placeholder:text-blue-400 w-full mb-3 border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white"
//                 type="number"
//                 placeholder="Amount"
//               />

//               <label className="pt-3 text-xs uppercase text-slate-500">Category</label>
//               <select className="text-blue-400 w-full mb-3 border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white">
//                 <option value="">Select</option>
//                 <option value="Food">Food</option>
//                 <option value="Rent">Rent</option>
//                 <option value="Shopping">Shopping</option>
//                 <option value="Other">Other</option>
//               </select>

//               <label className="pt-3 text-xs uppercase text-slate-500">Date</label>
//               <input
//                 className="text-blue-400 w-full mb-3 border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white"
//                 type="date"
//               />

//               <div className="w-full flex justify-between">
//                 <button
//                   className="w-32 mt-2 border border-slate-300 py-2 px-4 rounded-md bg-blue-600 text-white hover:bg-blue-700 "
//                 >
//                   Add Expense
//                 </button>
//                 <button
//                   onClick={() => dispatch(closeModal())}
//                   className="w-32 mt-2 border border-slate-300 py-2 px-4 rounded-md cursor-pointer hover:bg-red-500 hover:text-white"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default AddExpense;




import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../redux/features/ExpenseSlice";

function AddExpense() {
  const isOpen = useSelector((state) => state.expenseModal.value);
  const dispatch = useDispatch();

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
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Title
                </label>
                <input
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
                  type="number"
                  placeholder="e.g. 1200"
                  className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-500 mb-1">
                  Category
                </label>
                <select className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
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
