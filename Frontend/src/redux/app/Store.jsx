import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer:{
        ExpenseModalReducer: EMR
    }
})

export default Store;