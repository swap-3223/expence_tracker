import { configureStore } from "@reduxjs/toolkit";
import expenseReducer from "../features/ExpenseSlice";

const store = configureStore({
  reducer: {
    expenseModal: expenseReducer,
  },
});

export default store;
