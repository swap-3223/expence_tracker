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
      

      <h1 className="text-3xl font-bold mb-6 ml-8 text-[#D8A35D]">
        Analytics & Reports
      </h1>

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
