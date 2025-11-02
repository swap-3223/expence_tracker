import React, { useEffect } from "react";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getExpenses } from "../redux/features/ExpenseSlice";

function History() {
  const dispatch = useDispatch();
  const {
      expenses = [],
      loading,
      error,
    } = useSelector((state) => state.expenseModal);

  useEffect(() => {
    dispatch(getExpenses());
  }, [dispatch]);
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  const cards = [
    {
      title: "Total Income",
      value: "₹25,000",
      icon: <GiReceiveMoney size={36} className="text-green-500" />,
      color: "bg-green-100",
    },
    {
      title: "Total Expenses",
      value: "₹18,200",
      icon: <GiPayMoney size={36} className="text-red-500" />,
      color: "bg-red-100",
    },
    {
      title: "Balance",
      value: "₹6,800",
      icon: <MdAccountBalanceWallet size={36} className="text-blue-600" />,
      color: "bg-blue-100",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Transaction Summary</h1>

      {/* ✅ Responsive grid for cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center gap-4 p-6 rounded-xl border border-gray-200 shadow-sm ${card.color} hover:shadow-md hover:scale-[1.02] transition-all duration-300`}
          >
            {/* Icon */}
            <div className="p-3 bg-white rounded-full shadow-sm">{card.icon}</div>

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm font-medium">{card.title}</span>
              <span className="text-xl font-semibold text-slate-800">{card.value}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Optional: Recent Transactions Section */}
      <div className="mt-10 bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">Recent Transactions</h2>
        {expenses.length !== 0 ? <>
          <table className="w-full text-left text-slate-700">
            <thead>
              <tr className="border-b text-sm text-gray-500 uppercase">
                <th className="py-2">Title</th>
                <th className="py-2">Category</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Date</th>
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
                </tr>
              ))}
            </tbody>
          </table>
          
</> : <div className="text-gray-500 text-sm">No recent transactions found.</div>}
        </div>
    </div>
  );
}

export default History;
