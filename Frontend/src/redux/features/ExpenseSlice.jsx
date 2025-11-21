import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getExpenses = createAsyncThunk(
  "expenses/getExpenses",
  async (_, { rejectWithValue }) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (!token) {
        return rejectWithValue("No token found, please login again");
      }
      const res = await axios.get("https://expence-tracker-9uzt.onrender.com/api/v1/expense/getExpense", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

const ExpenseSlice = createSlice({
  name: "expenseModal",
  initialState: {
    openModal: false,
    openUpdateModal: false,
    selectedExpense: null, 
    expenses: [],
    loading: false,
    error: null,
  },
  reducers: {
    openModal: (state) => {
      state.openModal = true;
    },
    closeModal: (state) => {
      state.openModal = false;
    },
    openUpdateModal: (state, action) => {
      state.openUpdateModal = true;
      state.selectedExpense = action.payload; 
    },
    closeUpdateModal: (state) => {
      state.openUpdateModal = false;
      state.selectedExpense = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload.expenses;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  openModal,
  closeModal,
  openUpdateModal,
  closeUpdateModal,
} = ExpenseSlice.actions;

export default ExpenseSlice.reducer;