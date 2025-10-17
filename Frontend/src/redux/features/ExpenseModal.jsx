import { createSlice } from "@reduxjs/toolkit";

const ExpenseModalSlice = createSlice({
    name:ERMSlice,
    initialState:{
        value:false
    },
    reducers:{
        openModal:(state)=>{
            state.value = !state.value
        }
    }
})

export const {openModal} = ExpenseModalSlice.actions;
export default ExpenseModalSlice.reducer;