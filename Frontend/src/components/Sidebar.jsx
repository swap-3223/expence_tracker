import React, { useState } from "react";
import { RxDashboard, RxHamburgerMenu } from "react-icons/rx";
import { TbHistory, TbTransactionRupee, TbReportSearch } from "react-icons/tb";
import { RiShieldUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/ExpenseSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Mobile Navbar Button */}
      <div className="md:hidden flex items-start justify-between absolute pt-5 p-1">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[#F9F6EF] bg-[#1B1B1D]/80 p-2 rounded-md shadow-lg"
        >
          <RxHamburgerMenu size={26} />
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <div
        className={`
          fixed md:static top-5 left-0 h-full md:h-auto w-64 md:w-1/4 
          bg-[#1B1B1D]/95 backdrop-blur-xl 
          border-r border-[#A0937D]/40 
          shadow-[4px_0_25px_rgba(0,0,0,0.55)]
          flex flex-col py-10 px-5 font-semibold text-md text-[#F9F6EF]
          transition-transform duration-300 ease-in-out z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsOpen(false)}
          className="md:hidden self-end mb-4 text-[#D8A35D] text-xl"
        >
          ✕
        </button>

        {/* Sidebar Links */}
        <Link
          to="dashbordHome"
          onClick={() => setIsOpen(false)}
          className="
            flex items-center gap-3 px-3 h-11 rounded-lg mb-2
            hover:bg-[#D8A35D] hover:text-[#1B1B1D]
            transition-all duration-200 group
          "
        >
          <RxDashboard
            size={22}
            className="text-[#D8A35D] group-hover:text-[#1B1B1D]"
          />
          Dashboard
        </Link>

        <Link
          to="history"
          onClick={() => setIsOpen(false)}
          className="
            flex items-center gap-3 px-3 h-11 rounded-lg mb-2
            hover:bg-[#D8A35D] hover:text-[#1B1B1D]
            transition-all duration-200 group
          "
        >
          <TbHistory
            size={22}
            className="text-[#D8A35D] group-hover:text-[#1B1B1D]"
          />
          Transaction History
        </Link>

        <h1
          onClick={() => {
            dispatch(openModal());
            setIsOpen(false);
          }}
          className="
            flex items-center gap-3 px-3 h-11 rounded-lg mb-2 cursor-pointer
            hover:bg-[#D8A35D] hover:text-[#1B1B1D]
            transition-all duration-200 group
          "
        >
          <TbTransactionRupee
            size={22}
            className="text-[#D8A35D] group-hover:text-[#1B1B1D]"
          />
          Add Transactions
        </h1>

        <Link
          to="reports"
          onClick={() => setIsOpen(false)}
          className="
            flex items-center gap-3 px-3 h-11 rounded-lg mb-2
            hover:bg-[#D8A35D] hover:text-[#1B1B1D]
            transition-all duration-200 group
          "
        >
          <TbReportSearch
            size={22}
            className="text-[#D8A35D] group-hover:text-[#1B1B1D]"
          />
          Reports
        </Link>

        <Link
          to="profile"
          onClick={() => setIsOpen(false)}
          className="
            flex items-center gap-3 px-3 h-11 rounded-lg mb-2
            hover:bg-[#D8A35D] hover:text-[#1B1B1D]
            transition-all duration-200 group
          "
        >
          <RiShieldUserLine
            size={22}
            className="text-[#D8A35D] group-hover:text-[#1B1B1D]"
          />
          Profile
        </Link>
      </div>

      {/* 🔹 Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
