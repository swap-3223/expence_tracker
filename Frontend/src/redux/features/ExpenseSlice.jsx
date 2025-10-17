// import {createSlice} from "@reduxjs/toolkit"

// const ExpenseSlice  = createSlice({
//     name:"expenseModal",
//     initialState:{
//         value:false
//     },
//     reducers:{
//         openModal:(state)=>{
//             state.value = true
//         },
//         closeModal:(state)=>{
//             state.value = false
//         }
//     }
// })

// export const {openModal,closeModal} = ExpenseSlice.actions;
// export default ExpenseSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const ExpenseSlice = createSlice({
  name: "expenseModal",
  initialState: {
    value: false,
  },
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
});

export const { openModal, closeModal } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
