import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/Slices/userSlice"
import basketSlice from "./Slices/basketSlice";
const store = configureStore({
    reducer:{
        user:userReducer,
        basketItems:basketSlice
    }
})
export default store