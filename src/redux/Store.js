import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";

const store = configureStore({
    reducer:{
        counterReducer:CounterSlice
    }
})
export default store 