  // import React from "react";
  // import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

  // const data = [
  //   { name: "Food", value: 400 },
  //   { name: "Rent", value: 300 },
  //   { name: "Entertainment", value: 200 },
  //   { name: "Others", value: 100 },
  // ];

  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  // function ReportsPage() {
  //   return (
  //     <div className="p-6">
  //       <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>

  //       {/* Summary Cards */}
  //       <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
  //         <div className="bg-blue-100 p-4 rounded-md shadow">Total Income: $5000</div>
  //         <div className="bg-red-100 p-4 rounded-md shadow">Total Expenses: $3000</div>
  //         <div className="bg-green-100 p-4 rounded-md shadow">Balance: $2000</div>
  //         <div className="bg-yellow-100 p-4 rounded-md shadow">Transactions: 25</div>
  //       </div>

  //       {/* Charts Section */}
  //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  //         {/* Pie Chart for Expense Categories */}
  //         <div className="bg-white p-4 rounded-md shadow">
  //           <h2 className="font-semibold mb-2">Expenses by Category</h2>
  //           <ResponsiveContainer width="100%" height={300}>
  //             <PieChart>
  //               <Pie
  //                 data={data}
  //                 dataKey="value"
  //                 nameKey="name"
  //                 cx="50%"
  //                 cy="50%"
  //                 outerRadius={80}
  //                 fill="#8884d8"
  //                 label
  //               >
  //                 {data.map((entry, index) => (
  //                   <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //                 ))}
  //               </Pie>
  //               <Tooltip />
  //             </PieChart>
  //           </ResponsiveContainer>
  //         </div>

  //         {/* Bar Chart for Monthly Income vs Expenses */}
  //         <div className="bg-white p-4 rounded-md shadow">
  //           <h2 className="font-semibold mb-2">Monthly Income vs Expenses</h2>
  //           <ResponsiveContainer width="100%" height={300}>
  //             <BarChart
  //               data={[
  //                 { month: "Jan", income: 1000, expense: 800 },
  //                 { month: "Feb", income: 1200, expense: 700 },
  //                 { month: "Mar", income: 900, expense: 600 },
  //                 { month: "Apr", income: 1100, expense: 900 },
  //               ]}
  //             >
  //               <XAxis dataKey="month" />
  //               <YAxis />
  //               <Tooltip />
  //               <Legend />
  //               <Bar dataKey="income" fill="#00C49F" />
  //               <Bar dataKey="expense" fill="#FF8042" />
  //             </BarChart>
  //           </ResponsiveContainer>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  // export default ReportsPage;



  import React from "react";
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

const pieData = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Others", value: 100 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const barData = [
  { month: "Jan", income: 1000, expense: 800 },
  { month: "Feb", income: 1200, expense: 950 },
  { month: "Mar", income: 900, expense: 700 },
  { month: "Apr", income: 1100, expense: 900 },
  { month: "May", income: 1400, expense: 1100 },
  { month: "Jun", income: 1600, expense: 1200 },
];

const lineData = [
  { month: "Jan", balance: 200 },
  { month: "Feb", balance: 250 },
  { month: "Mar", balance: 300 },
  { month: "Apr", balance: 200 },
  { month: "May", balance: 400 },
  { month: "Jun", balance: 450 },
];

function ReportsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6 text-gray-800 dark:text-gray-200">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6 text-blue-600 dark:text-blue-400">
        Analytics & Reports
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-blue-100 dark:bg-blue-900/40 p-5 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Income</p>
          <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-300 mt-2">
            ₹ 5,000
          </h2>
        </div>
        <div className="bg-red-100 dark:bg-red-900/40 p-5 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Total Expenses</p>
          <h2 className="text-2xl font-semibold text-red-700 dark:text-red-300 mt-2">
            ₹ 3,000
          </h2>
        </div>
        <div className="bg-green-100 dark:bg-green-900/40 p-5 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Balance</p>
          <h2 className="text-2xl font-semibold text-green-700 dark:text-green-300 mt-2">
            ₹ 2,000
          </h2>
        </div>
        <div className="bg-yellow-100 dark:bg-yellow-900/40 p-5 rounded-xl shadow-md text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">Transactions</p>
          <h2 className="text-2xl font-semibold text-yellow-700 dark:text-yellow-300 mt-2">
            25
          </h2>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="font-semibold mb-4 text-lg">Expenses by Category</h2>
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
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="font-semibold mb-4 text-lg">Monthly Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#00C49F" radius={[6, 6, 0, 0]} />
              <Bar dataKey="expense" fill="#FF8042" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md lg:col-span-2">
          <h2 className="font-semibold mb-4 text-lg">Balance Growth Over Time</h2>
          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="balance"
                stroke="#8884d8"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
