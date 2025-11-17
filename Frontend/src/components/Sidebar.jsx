
import React, { useState } from "react";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { TbHistory, TbTransactionRupee, TbReportSearch } from "react-icons/tb";
import { RiShieldUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/ExpenseSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false); // toggle sidebar on mobile

  return (
    <>
      {/* 🔹 Mobile Navbar (Hamburger Button) */}
      <div className="md:hidden flex items-start justify-between absolute pt-5 p-1  bg-gray-50">
        {/* <h1 className="text-xl font-bold text-slate-800">Expense Tracker</h1> */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-slate-800 focus:outline-none"
        >
          <RxHamburgerMenu size={26} />
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`fixed md:static top-5 left-0 h-full md:h-auto w-64 md:w-1/4 bg-gray-200 border-r border-gray-300 flex flex-col py-10 px-5 font-semibold text-md text-zinc-800 transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden self-end mb-4 text-slate-700"
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <Link
          to="dashbordHome"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer hover:bg-blue-950 hover:text-white w-full h-10 rounded-md px-3 gap-3 group"
        >
          <RxDashboard
            size={22}
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
          />
          Dashboard
        </Link>

        <Link
          to="history"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer hover:bg-blue-950 hover:text-white w-full h-10 rounded-md px-3 gap-3 group"
        >
          <TbHistory
            size={22}
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
          />
          Transaction History
        </Link>

        <h1
          onClick={() => {
            dispatch(openModal());
            setIsOpen(false);
          }}
          className="flex items-center cursor-pointer hover:bg-blue-950 hover:text-white w-full h-10 rounded-md px-3 gap-3 group"
        >
          <TbTransactionRupee
            size={22}
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
          />
          Add Transactions
        </h1>

        <Link
          to="reports"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer hover:bg-blue-950 hover:text-white w-full h-10 rounded-md px-3 gap-3 group"
        >
          <TbReportSearch
            size={22}
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
          />
          Reports
        </Link>

        <Link
          to="profile"
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer hover:bg-blue-950 hover:text-white w-full h-10 rounded-md px-3 gap-3 group"
        >
          <RiShieldUserLine
            size={22}
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
          />
          Profile
        </Link>
      </div>

      {/* 🔹 Overlay when sidebar open (mobile) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
