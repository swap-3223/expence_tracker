import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function Dashbord() {
  return (
    <div className="flex mt-20">
      <Sidebar />
      <div className="h-full min-h-screen w-full overflow-x-hidden flex flex-col mt-5 text-lg font-semibold text-zinc-900">+
       <Outlet/>
      </div>
    </div>
  );
}

export default Dashbord;
