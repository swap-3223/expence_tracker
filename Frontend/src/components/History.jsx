import React from 'react'
import { GiReceiveMoney,GiPayMoney } from "react-icons/gi";
import { MdAccountBalanceWallet } from 'react-icons/md';
function History() {
  return (
    <>
        <div className='flex h-1/3 py-5 gap-5 justify-evenly w-full px-8 '>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><GiReceiveMoney size={30} color='green'/>Total Income</div>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><GiPayMoney color='red' size={30}/>Total Expenses</div>
                <div className='flex gap-3 border-2 border-gray-300 bg-gray-100 rounded-xl py-6 px-5 w-1/3 h-32 '><MdAccountBalanceWallet color='#2d37ad' size={30}/>Balance</div>
            </div>
    </>
  )
}

export default History