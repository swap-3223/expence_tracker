import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Legend } from "recharts";

const data = [
  { name: "Food", value: 400 },
  { name: "Rent", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Others", value: 100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

function ReportsPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Analytics & Reports</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-blue-100 p-4 rounded-md shadow">Total Income: $5000</div>
        <div className="bg-red-100 p-4 rounded-md shadow">Total Expenses: $3000</div>
        <div className="bg-green-100 p-4 rounded-md shadow">Balance: $2000</div>
        <div className="bg-yellow-100 p-4 rounded-md shadow">Transactions: 25</div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart for Expense Categories */}
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="font-semibold mb-2">Expenses by Category</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart for Monthly Income vs Expenses */}
        <div className="bg-white p-4 rounded-md shadow">
          <h2 className="font-semibold mb-2">Monthly Income vs Expenses</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={[
                { month: "Jan", income: 1000, expense: 800 },
                { month: "Feb", income: 1200, expense: 700 },
                { month: "Mar", income: 900, expense: 600 },
                { month: "Apr", income: 1100, expense: 900 },
              ]}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="income" fill="#00C49F" />
              <Bar dataKey="expense" fill="#FF8042" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default ReportsPage;
