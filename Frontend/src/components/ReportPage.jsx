  // import React, { useEffect } from "react";
  // import {
  //   PieChart,
  //   Pie,
  //   Cell,
  //   Tooltip,
  //   ResponsiveContainer,
  //   BarChart,
  //   Bar,
  //   XAxis,
  //   YAxis,
  //   Legend,
  //   LineChart,
  //   Line,
  //   CartesianGrid,
  // } from "recharts";
  // import { getExpenses } from "../redux/features/ExpenseSlice";
  // import { useDispatch, useSelector } from "react-redux";


  // function ReportsPage() {

  //       const user = JSON.parse(localStorage.getItem('user'))
  //       const dispatch = useDispatch();
  //       const {
  //         expenses = [],
  //         loading,
  //         error,
  //       } = useSelector((state) => state.expenseModal);
    
  //       const isOpen = useSelector((state) => state.expenseModal.openModal);
  //     //Category-wise Data
  //       const categoryTotals = expenses.reduce((acc,exp)=>{
  //         const ctgry = exp.category || "Other";
  //         acc[ctgry] = (acc[ctgry] || 0) + parseFloat(exp.amount || 0);
  //         return acc;
  //       },{})
    
  //       useEffect(() => {
  //         dispatch(getExpenses());
  //       }, [dispatch, isOpen]);
  //   const totalTransactions = expenses.length;

  //       if (loading) return <p>Loading...</p>;
  //       if (error) return <p>Error: {error}</p>;
  //       const totalExpense = expenses.reduce(
  //         (sum, exp) => sum + parseFloat(exp.amount || 0),
  //         0
  //       );

  // const pieData = [
  //   { name: "Food", value: categoryTotals["Food"] || 0 },
  //   { name: "Rent", value: categoryTotals["Rent"] || 0 },
  //   { name: "Shopping", value: categoryTotals["Shopping"] || 0 },
  //   { name: "Others", value: categoryTotals["Other"] || 0 },
  // ];
  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // // Months you want to display
  // const months = [
  //   "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
  // ];

  // const monthTotals = months.map((month, index) => {
  //   const total = expenses
  //     .filter((exp) => {
  //       if (!exp.date && !exp.createdAt) return false;
  //       const dateStr = exp.date || exp.createdAt;

  //       // handle both ISO string and plain yyyy-mm-dd formats safely
  //       const monthNum = parseInt(
  //         new Date(dateStr).toISOString().slice(5, 7),
  //         10
  //       ) - 1;

  //       return monthNum === index;
  //     })
  //     .reduce((sum, exp) => sum + Number(exp.amount || 0), 0);

  //   return { month, expense: total };
  // });

  // // ✅ Bar Chart Data
  // const barData = monthTotals.map((item) => ({
  //   month: item.month,
  //   income: 0,
  //   expense: item.expense,
  // }));

  // // ✅ Line Chart Data
  // const lineData = monthTotals.map((item) => ({
  //   month: item.month,
  //   balance: item.expense, // can replace with income - expense later
  // }));



  //   return (
  //     <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-200">
  //       {/* Header */}
  //       <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
  //         Analytics & Reports
  //       </h1>

  //       {/* Summary Cards */}
  //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
  //         <div className="bg-blue-100 dark:bg-blue-900/40 p-5 rounded-xl shadow-md text-center">
  //           <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
  //           <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mt-2">
  //             "this feature is comming soon"
  //           </h2>
  //         </div>
  //         <div className="bg-red-100 dark:bg-red-900/40 p-5 rounded-xl shadow-md text-center">
  //           <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
  //           <h2 className="text-2xl font-semibold text-red-700 dark:text-red-300 mt-2">
  //             ₹ {totalExpense}
  //           </h2>
  //         </div>
  //         <div className="bg-green-100 dark:bg-green-900/40 p-5 rounded-xl shadow-md text-center">
  //           <p className="text-sm text-gray-600 dark:text-gray-400">Balance</p>
  //           <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mt-2">
  //             "this feature comming soon"
  //           </h2>
  //         </div>
  //         <div className="bg-yellow-100 dark:bg-yellow-900/40 p-5 rounded-xl shadow-md text-center">
  //           <p className="text-sm text-gray-600 dark:text-gray-400">Transactions</p>
  //           <h2 className="text-2xl font-semibold text-yellow-700 dark:text-yellow-300 mt-2">
  //             {totalTransactions}
  //           </h2>
  //         </div>
  //       </div>

  //       {/* Charts Grid */}
  //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  //         {/* Pie Chart */}
  //         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
  //           <h2 className="font-semibold mb-4 text-lg">Expenses by Category</h2>
  //           <ResponsiveContainer width="100%" height={300}>
  //             <PieChart>
  //               <Pie
  //                 data={pieData}
  //                 dataKey="value"
  //                 nameKey="name"
  //                 cx="50%"
  //                 cy="50%"
  //                 outerRadius={100}
  //                 label
  //               >
  //                 {pieData.map((entry, index) => (
  //                   <Cell
  //                     key={`cell-${index}`}
  //                     fill={COLORS[index % COLORS.length]}
  //                   />
  //                 ))}
  //               </Pie>
  //               <Tooltip />
  //               <Legend />
  //             </PieChart>
  //           </ResponsiveContainer>
  //         </div>

  //         {/* Bar Chart */}
  //         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
  //           <h2 className="font-semibold mb-4 text-lg">Monthly Income vs Expenses</h2>
  //           <ResponsiveContainer width="100%" height={300}>
  //             <BarChart data={barData}>
  //               <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
  //               <XAxis dataKey="month" />
  //               <YAxis />
  //               <Tooltip />
  //               <Legend />
  //               <Bar dataKey="income" fill="#00C49F" radius={[6, 6, 0, 0]} />
  //               <Bar dataKey="expense" fill="#FF8042" radius={[6, 6, 0, 0]} />
  //             </BarChart>
  //           </ResponsiveContainer>
  //         </div>

  //         {/* Line Chart */}
  //         <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md lg:col-span-2">
  //           <h2 className="font-semibold mb-4 text-lg">Balance Growth Over Time</h2>
  //           <ResponsiveContainer width="100%" height={320}>
  //             <LineChart data={lineData}>
  //               <CartesianGrid strokeDasharray="3 3" />
  //               <XAxis dataKey="month" />
  //               <YAxis />
  //               <Tooltip />
  //               <Legend />
  //               <Line
  //                 type="monotone"
  //                 dataKey="balance"
  //                 stroke="#8884d8"
  //                 strokeWidth={3}
  //                 dot={{ r: 4 }}
  //               />
  //             </LineChart>
  //           </ResponsiveContainer>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default ReportsPage;
// import React, { useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";
// import { getExpenses } from "../redux/features/ExpenseSlice";
// import { useDispatch, useSelector } from "react-redux";

// function ReportsPage() {
//   const user = JSON.parse(localStorage.getItem("user"));
//   const dispatch = useDispatch();
//   const { expenses = [], loading, error } = useSelector(
//     (state) => state.expenseModal
//   );
//   const isOpen = useSelector((state) => state.expenseModal.openModal);

//   const categoryTotals = expenses.reduce((acc, exp) => {
//     const ctgry = exp.category || "Other";
//     acc[ctgry] = (acc[ctgry] || 0) + parseFloat(exp.amount || 0);
//     return acc;
//   }, {});

//   useEffect(() => {
//     dispatch(getExpenses());
//   }, [dispatch, isOpen]);

//   const totalTransactions = expenses.length;

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   const totalExpense = expenses.reduce(
//     (sum, exp) => sum + parseFloat(exp.amount || 0),
//     0
//   );

//   const pieData = [
//     { name: "Food", value: categoryTotals["Food"] || 0 },
//     { name: "Rent", value: categoryTotals["Rent"] || 0 },
//     { name: "Shopping", value: categoryTotals["Shopping"] || 0 },
//     { name: "Others", value: categoryTotals["Other"] || 0 },
//   ];

//   const COLORS = ["#3E7B27", "#6D9773", "#FFBA00", "#EDEDED"];

//   const months = [
//     "Jan","Feb","Mar","Apr","May","Jun",
//     "Jul","Aug","Sep","Oct","Nov","Dec"
//   ];

//   const monthTotals = months.map((month, index) => {
//     const total = expenses
//       .filter((exp) => {
//         if (!exp.date && !exp.createdAt) return false;
//         const dateStr = exp.date || exp.createdAt;
//         const monthNum =
//           parseInt(new Date(dateStr).toISOString().slice(5, 7), 10) - 1;
//         return monthNum === index;
//       })
//       .reduce((sum, exp) => sum + Number(exp.amount || 0), 0);
//     return { month, expense: total };
//   });

//   const barData = monthTotals.map((item) => ({
//     month: item.month,
//     income: 0,
//     expense: item.expense,
//   }));

//   const lineData = monthTotals.map((item) => ({
//     month: item.month,
//     balance: item.expense,
//   }));

//   return (
//     <div className="min-h-screen bg-black p-6 text-[#EDEDED]">
//       {/* Header */}
//       <h1 className="text-3xl font-bold mb-6 text-[#FFBA00]">
//         Analytics & Reports
//       </h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

//         <div className="bg-[#1A1A1A] p-5 rounded-xl shadow-md text-center border border-[#6D9773]">
//           <p className="text-sm text-gray-400">Total Income</p>
//           <h2 className="text-2xl font-semibold text-[#FFBA00] mt-2">
//             "this feature is coming soon"
//           </h2>
//         </div>

//         <div className="bg-[#1A1A1A] p-5 rounded-xl shadow-md text-center border border-red-600">
//           <p className="text-sm text-gray-400">Total Expenses</p>
//           <h2 className="text-2xl font-semibold text-red-500 mt-2">
//             ₹ {totalExpense}
//           </h2>
//         </div>

//         <div className="bg-[#1A1A1A] p-5 rounded-xl shadow-md text-center border border-[#3E7B27]">
//           <p className="text-sm text-gray-400">Balance</p>
//           <h2 className="text-2xl font-semibold text-[#6D9773] mt-2">
//             "this feature coming soon"
//           </h2>
//         </div>

//         <div className="bg-[#1A1A1A] p-5 rounded-xl shadow-md text-center border border-[#FFBA00]">
//           <p className="text-sm text-gray-400">Transactions</p>
//           <h2 className="text-2xl font-semibold text-[#FFBA00] mt-2">
//             {totalTransactions}
//           </h2>
//         </div>
//       </div>

//       {/* Charts Grid */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//         {/* Pie Chart */}
//         <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md border border-[#6D9773]">
//           <h2 className="font-semibold mb-4 text-lg text-[#FFBA00]">
//             Expenses by Category
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md border border-[#6D9773]">
//           <h2 className="font-semibold mb-4 text-lg text-[#FFBA00]">
//             Monthly Income vs Expenses
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={barData}>
//               <CartesianGrid stroke="#333" />
//               <XAxis dataKey="month" stroke="#EDEDED" />
//               <YAxis stroke="#EDEDED" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="income" fill="#6D9773" radius={[6, 6, 0, 0]} />
//               <Bar dataKey="expense" fill="#FF8042" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart */}
//         <div className="bg-[#1A1A1A] p-6 rounded-xl shadow-md border border-[#6D9773] lg:col-span-2">
//           <h2 className="font-semibold mb-4 text-lg text-[#FFBA00]">
//             Balance Growth Over Time
//           </h2>
//           <ResponsiveContainer width="100%" height={320}>
//             <LineChart data={lineData}>
//               <CartesianGrid stroke="#333" />
//               <XAxis dataKey="month" stroke="#EDEDED" />
//               <YAxis stroke="#EDEDED" />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="balance"
//                 stroke="#FFBA00"
//                 strokeWidth={3}
//                 dot={{ r: 4, fill: "#6D9773" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ReportsPage;


// import React, { useEffect } from "react";
// import {
//   PieChart,
//   Pie,
//   Cell,
//   Tooltip,
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Legend,
//   LineChart,
//   Line,
//   CartesianGrid,
// } from "recharts";
// import { getExpenses } from "../redux/features/ExpenseSlice";
// import { useDispatch, useSelector } from "react-redux";

// function ReportsPage() {
//   const dispatch = useDispatch();
//   const { expenses = [], loading, error } = useSelector(
//     (state) => state.expenseModal
//   );
//   const isOpen = useSelector((state) => state.expenseModal.openModal);

//   const categoryTotals = expenses.reduce((acc, exp) => {
//     const ctgry = exp.category || "Other";
//     acc[ctgry] = (acc[ctgry] || 0) + parseFloat(exp.amount || 0);
//     return acc;
//   }, {});

//   useEffect(() => {
//     dispatch(getExpenses());
//   }, [dispatch, isOpen]);

//   const totalTransactions = expenses.length;
//   const totalExpense = expenses.reduce(
//     (sum, exp) => sum + parseFloat(exp.amount || 0),
//     0
//   );

//   const pieData = [
//     { name: "Food", value: categoryTotals["Food"] || 0 },
//     { name: "Rent", value: categoryTotals["Rent"] || 0 },
//     { name: "Shopping", value: categoryTotals["Shopping"] || 0 },
//     { name: "Others", value: categoryTotals["Other"] || 0 },
//   ];

//   const COLORS = ["#A0937D", "#D8A35D", "#1B1B1D", "#F9F6EF"];

//   const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

//   const monthTotals = months.map((month, index) => {
//     const total = expenses
//       .filter((exp) => {
//         if (!exp.date && !exp.createdAt) return false;
//         const dateStr = exp.date || exp.createdAt;
//         const monthNum =
//           parseInt(new Date(dateStr).toISOString().slice(5, 7), 10) - 1;
//         return monthNum === index;
//       })
//       .reduce((sum, exp) => sum + Number(exp.amount || 0), 0);

//     return { month, expense: total };
//   });

//   const barData = monthTotals.map((item) => ({
//     month: item.month,
//     income: 0,
//     expense: item.expense,
//   }));

//   const lineData = monthTotals.map((item) => ({
//     month: item.month,
//     balance: item.expense,
//   }));

//   return (
//     <div className="min-h-screen bg-[#1B1B1D] p-6 text-[#F9F6EF]">
      
//       <h1 className="text-3xl font-bold mb-6 text-[#D8A35D]">
//         Analytics & Reports
//       </h1>

//       {/* Summary Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

//         <div className="bg-[#1B1B1D] p-5 rounded-xl shadow-md text-center border border-[#A0937D]">
//           <p className="text-sm text-[#A0937D]">Total Income</p>
//           <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
//             Coming Soon
//           </h2>
//         </div>

//         <div className="bg-[#1B1B1D] p-5 rounded-xl shadow-md text-center border border-red-500">
//           <p className="text-sm text-[#A0937D]">Total Expenses</p>
//           <h2 className="text-2xl font-semibold text-red-500 mt-2">
//             ₹ {totalExpense}
//           </h2>
//         </div>

//         <div className="bg-[#1B1B1D] p-5 rounded-xl shadow-md text-center border border-[#A0937D]">
//           <p className="text-sm text-[#A0937D]">Balance</p>
//           <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
//             Coming Soon
//           </h2>
//         </div>

//         <div className="bg-[#1B1B1D] p-5 rounded-xl shadow-md text-center border border-[#D8A35D]">
//           <p className="text-sm text-[#A0937D]">Transactions</p>
//           <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
//             {totalTransactions}
//           </h2>
//         </div>

//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//         {/* Pie Chart */}
//         <div className="bg-[#1B1B1D] p-6 rounded-xl shadow-md border border-[#A0937D]">
//           <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
//             Expenses by Category
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <PieChart>
//               <Pie
//                 data={pieData}
//                 dataKey="value"
//                 nameKey="name"
//                 cx="50%"
//                 cy="50%"
//                 outerRadius={100}
//                 label
//               >
//                 {pieData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bar Chart */}
//         <div className="bg-[#1B1B1D] p-6 rounded-xl shadow-md border border-[#A0937D]">
//           <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
//             Monthly Expense Trend
//           </h2>
//           <ResponsiveContainer width="100%" height={300}>
//             <BarChart data={barData}>
//               <CartesianGrid stroke="#2A2A2A" />
//               <XAxis dataKey="month" stroke="#F9F6EF" />
//               <YAxis stroke="#F9F6EF" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="expense" fill="#D8A35D" radius={[6, 6, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Line Chart */}
//         <div className="bg-[#1B1B1D] p-6 rounded-xl shadow-md border border-[#A0937D] lg:col-span-2">
//           <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
//             Expense Growth Over Time
//           </h2>
//           <ResponsiveContainer width="100%" height={320}>
//             <LineChart data={lineData}>
//               <CartesianGrid stroke="#2A2A2A" />
//               <XAxis dataKey="month" stroke="#F9F6EF" />
//               <YAxis stroke="#F9F6EF" />
//               <Tooltip />
//               <Legend />
//               <Line
//                 type="monotone"
//                 dataKey="balance"
//                 stroke="#A0937D"
//                 strokeWidth={3}
//                 dot={{ r: 4, fill: "#D8A35D" }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default ReportsPage;
import React, { useEffect } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";
import { getExpenses } from "../redux/features/ExpenseSlice";
import { useDispatch, useSelector } from "react-redux";

function ReportsPage() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  const { expenses = [], loading, error } = useSelector(
    (state) => state.expenseModal
  );

  const isOpen = useSelector((state) => state.expenseModal.openModal);

  // Category totals
  const categoryTotals = expenses.reduce((acc, exp) => {
    const c = exp.category || "Other";
    acc[c] = (acc[c] || 0) + parseFloat(exp.amount || 0);
    return acc;
  }, {});

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch, isOpen]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const totalTransactions = expenses.length;

  const totalExpense = expenses.reduce(
    (sum, exp) => sum + parseFloat(exp.amount || 0),
    0
  );

  // PIE DATA
  const pieData = [
    { name: "Food", value: categoryTotals["Food"] || 0 },
    { name: "Rent", value: categoryTotals["Rent"] || 0 },
    { name: "Shopping", value: categoryTotals["Shopping"] || 0 },
    { name: "Others", value: categoryTotals["Other"] || 0 },
  ];

  // Keep bright chart colors
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // MONTH LIST
  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const monthTotals = months.map((month, index) => {
    const total = expenses
      .filter((exp) => {
        const date = exp.date || exp.createdAt;
        if (!date) return false;

        const monthNum =
          parseInt(new Date(date).toISOString().slice(5, 7), 10) - 1;
        return monthNum === index;
      })
      .reduce((sum, exp) => sum + Number(exp.amount || 0), 0);

    return { month, expense: total };
  });

  const barData = monthTotals.map((item) => ({
    month: item.month,
    income: 0,
    expense: item.expense,
  }));

  const lineData = monthTotals.map((item) => ({
    month: item.month,
    balance: item.expense,
  }));

  return (
    <div className="min-h-screen bg-[#1B1B1D] p-6 text-[#F9F6EF]">
      
      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-[#D8A35D]">
        Analytics & Reports
      </h1>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        
        <div className="bg-[#232325] p-5 rounded-xl shadow-md text-center border border-[#A0937D]">
          <p className="text-sm text-[#A0937D]">Total Income</p>
          <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
            "this feature is coming soon"
          </h2>
        </div>

        <div className="bg-[#232325] p-5 rounded-xl shadow-md text-center border border-red-600">
          <p className="text-sm text-[#A0937D]">Total Expenses</p>
          <h2 className="text-2xl font-semibold text-red-500 mt-2">
            ₹ {totalExpense}
          </h2>
        </div>

        <div className="bg-[#232325] p-5 rounded-xl shadow-md text-center border border-[#A0937D]">
          <p className="text-sm text-[#A0937D]">Balance</p>
          <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
            "this feature coming soon"
          </h2>
        </div>

        <div className="bg-[#232325] p-5 rounded-xl shadow-md text-center border border-[#D8A35D]">
          <p className="text-sm text-[#A0937D]">Transactions</p>
          <h2 className="text-2xl font-semibold text-[#D8A35D] mt-2">
            {totalTransactions}
          </h2>
        </div>
      </div>

      {/* CHARTS GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* PIE CHART */}
        <div className="bg-[#232325] p-6 rounded-xl shadow-md border border-[#A0937D]">
          <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
            Expenses by Category
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>

              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* BAR CHART */}
        <div className="bg-[#232325] p-6 rounded-xl shadow-md border border-[#A0937D]">
          <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
            Monthly Income vs Expenses
          </h2>

          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="month" stroke="#F9F6EF" />
              <YAxis stroke="#F9F6EF" />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#00C49F" />
              <Bar dataKey="expense" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* LINE CHART */}
        <div className="bg-[#232325] p-6 rounded-xl shadow-md border border-[#A0937D] lg:col-span-2">
          <h2 className="font-semibold mb-4 text-lg text-[#D8A35D]">
            Balance Growth Over Time
          </h2>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData}>
              <CartesianGrid stroke="#444" />
              <XAxis dataKey="month" stroke="#F9F6EF" />
              <YAxis stroke="#F9F6EF" />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#FFBB28"
                strokeWidth={3}
                dot={{ r: 5, fill: "#00C49F" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
}

export default ReportsPage;
