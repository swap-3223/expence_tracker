import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { TbTransactionRupee } from "react-icons/tb";
import { TbReportSearch } from "react-icons/tb";
import { RiShieldUserLine } from "react-icons/ri";
import { GiReceiveMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from "react-icons/md";
// import { RxHamburgerMenu } from "react-icons/rx";
import { GrHistory } from "react-icons/gr";





function Dashbord() {
  return (
    <div className='flex mt-20'>
        <div className=' w-1/4 border-2 text-zinc-800 font-semibold text-lg border-gray-300  bg-gray-200 flex flex-col py-10 gap-5 items-start px-5'>
        {/* <RxHamburgerMenu /> */}

            <h1 className='flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group'><RxDashboard size={24}     
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200"
 /> Dashboard</h1>
            <h1 className='flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group'><TbTransactionRupee size={24}     
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200" 
/>
Add Transactions</h1>
            <h1 className='flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group'><TbReportSearch size={24}     
            className="text-[#2d37ad] group-hover:text-white transition-colors duration-200" 
 />
Reports</h1>
<h1 className="flex items-center cursor-pointer text-zinc-800 hover:bg-blue-950 hover:text-white w-52 h-8 rounded-sm px-3 gap-3 group">
  <RiShieldUserLine 
    size={24} 
    className="text-[#2d37ad] group-hover:text-white transition-colors duration-200" 
  />
  Profile
</h1>

        </div>
        <div className='h-screen w-full overflow-x-hidden bg-gray-50 flex flex-col mt-5 text-lg font-semibold text-zinc-900'>
            <div className='flex h-1/3 py-5 gap-5 justify-evenly w-full px-8 '>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><GiReceiveMoney size={30} color='green'/>Total Income</div>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><GiPayMoney color='red' size={30}/>Total Expenses</div>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><MdAccountBalanceWallet color='#2d37ad' size={30}/>Balance</div>

            </div>
            <div className=' mr-9 ml-9 min-h-96 -mt-10 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 font-semibold text-2xl flex  gap-3 '><GrHistory size={20}/>
Recent Transactions</div>
        </div>

    </div>
  )
}

export default Dashbord