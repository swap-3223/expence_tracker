import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbHistory, TbTransactionRupee } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { RiShieldUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div className=" w-1/4 border-2 text-zinc-800 font-semibold text-md border-gray-300  bg-gray-200 flex flex-col py-10 gap-5 items-start px-5">
      {/* <RxHamburgerMenu /> */}

      <h1 className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
        <RxDashboard
          size={24}
          className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
        />{" "}
        Dashboard
      </h1>
      <Link to='history' className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
        <TbHistory
          size={24}
          className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
        />
        Transaction History
      </Link>
      <h1 to='addexpense' className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
        <TbTransactionRupee
          size={24}
          className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
        />
        Add Transactions
      </h1>
      <Link to='reports' className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
        <TbReportSearch
          size={24}
          className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
        />
        Reports
      </Link>
      <h1 className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
        <RiShieldUserLine
          size={24}
          className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
        />
        Profile
      </h1>
    </div>
  );
}

export default Sidebar;
