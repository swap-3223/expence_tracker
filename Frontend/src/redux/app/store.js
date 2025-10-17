// import {configureStore} from '@reduxjs/toolkit'
// import ModalSlice from "../features/ExpenseSlice"
// const store = configureStore({
//     reducer:{
//         expenseModal:ModalSlice
//     }
// })

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/ExpenseSlice";

const store = configureStore({
  reducer: {
    expenseModal: expenseReducer,
  },
});

export default store;
