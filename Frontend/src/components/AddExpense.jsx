import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
function AddExpense() {
//  const [isOpen, setIsOpen] = useState(false);
const openModal =  useSelector((state)=>state.openModal.value)
const dispatch = useDispatch();

  return (
    <>
      {/* Open Button */}
      <button
        onClick={openModal(dispatch(openModal))}
        className="rounded-md bg-slate-800 py-2 px-4 text-white text-sm shadow-md hover:bg-slate-700"
      >
        Add Expense
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
           // closes when clicking outside
          className="fixed inset-0 z-[999] grid place-items-center bg-black/60 backdrop-blur-sm"
        >
          {/* Modal Box */}
          <div
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
            className="relative m-4 w-1/4 rounded-lg bg-white shadow-sm"
          >
            {/* Header */}
            <div className="flex items-start justify-between p-4">
              <div className="flex w-full justify-center">
                <h5 className="text-xl font-medium text-slate-800">
                  Add Your Expense
                </h5>
              </div>
              {/* <button
                onClick={() => setIsOpen(false)}
                className="rounded-lg text-slate-500 cpoi p-1"
              >
                ✕
              </button> */}
            </div>

            {/* Modal Content */}
            <div className="px-4 pb-6 text-black">
              <label className="pt-3 text-xs uppercase  text-slate-500">Title</label>

              <input className="placeholder:text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" placeholder="Title"/>

              <label className="pt-3 text-xs uppercase text-slate-500">Amount</label>

              <input className="placeholder:text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" placeholder="Amount"/>

              <label className="pt-3 text-xs uppercase text-slate-500">Category</label>

              <input />
              <select className="text-blue-400 w-full mb-3 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="text" >      
                <option value="" >Select</option>
                <option value="Food">Food</option>
                <option value="Rent">Rent</option>
                <option value="Shopping">Shopping</option>
                <option value="other">other</option>

              </select>

              <label className="pt-3 text-xs uppercase text-slate-500">Date</label>

              <input className="text-blue-400 w-full mb-3 flex items-center justify-start border border-slate-300 py-2 px-4 rounded-md hover:bg-slate-800 hover:text-white" type="date"/>

              
              <div className="w-full flex justify-between">
                <button className=" w-32 mt-2 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md bg-blue-400 cursor-pointer hover:bg-white text-white hover:text-slate-800">
                Add Expense
              </button>
              <button onClick={() => setIsOpen(false)} className="w-32 mt-2 flex items-center justify-center border border-slate-300 py-2 px-4 rounded-md cursor-pointer hover:bg-red-500 hover:text-white">
                Cancel
              </button>
              </div>

              
            </div>

            {/* Footer */}
            {/* <div className="flex justify-between items-center px-4 py-3 border-t text-slate-500">
              <p className="text-sm">New to Ethereum wallets?</p>
              <button className="rounded-md border border-slate-300 py-1 px-3 text-sm hover:bg-slate-800 hover:text-white">
                Learn More
              </button>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
}


export default AddExpense