import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getExpenses = createAsyncThunk(
//   "expenses/getExpenses",
//   async (_, { rejectWithValue }) => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/v1/expense/getExpense", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return res.data; // <-- this returns { expenses: [...] }
//     } catch (error) {
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const getExpenses = createAsyncThunk(
  "expenses/getExpenses",
  async (_, { rejectWithValue }) => {
    try {
      // ✅ Get token from localStorage
      const user = JSON.parse(localStorage.getItem("user"));
      const token = user?.token;

      if (!token) {
        return rejectWithValue("No token found, please login again");
      }

      // ✅ Call API with Authorization header
      const res = await axios.get("http://localhost:5000/api/v1/expense/getExpense", {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data; // should contain { expenses: [...] }
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);


const ExpenseSlice = createSlice({
  name: "expenseModal",
  initialState: {
    value: false,
    expenses: [],
    loading: false,
    error: null,
  },
  reducers: {
    openModal: (state) => {
      state.value = true;
    },
    closeModal: (state) => {
      state.value = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(getExpenses.fulfilled, (state, action) => {
        state.loading = false;
        // ✅ Extract the array from the object
        state.expenses = action.payload.expenses;
      })
      .addCase(getExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { openModal, closeModal } = ExpenseSlice.actions;
export default ExpenseSlice.reducer;


// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
// import axios from 'axios'
// export const getExpenses = createAsyncThunk('expenseModal/getExpenses',async()=>{
//   const res = await axios.get('http://localhost:5000/api/v1/expense/getExpense')
//   return res.data;
// })
// const ExpenseSlice = createSlice({
//   name: "expenseModal",
//   initialState: {
//     value: false,
//     expenses:[],
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     openModal: (state) => {
//       state.value = true;
//     },
//     closeModal: (state) => {
//       state.value = false;
//     },
//   },
//   extraReducers:(builder)=>{
//     builder
//       .addCase(getExpenses.pending,(state)=>{
//         state.loading = true;
//       })
//       .addCase(getExpenses.fulfilled,(state,action)=>{
//         state.loading = false;
//         state.expense = action.payload;
//       })
//       .addCase(getExpenses.rejected,(state,action)=>{
//         state.loading=false;
//         state.error=action.error.message;
//       })
//   }
// });

// export const { openModal, closeModal } = ExpenseSlice.actions;
// export default ExpenseSlice.reducer;
