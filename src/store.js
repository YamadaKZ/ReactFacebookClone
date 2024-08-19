import { configureStore } from "@reduxjs/toolkit";
//import authSlice from "./slices/authSlice";
import authReducer from "./slices/authSlice"
import counterReducer from "./slices/countSlice"


const store = configureStore({
    reducer: {
        //auth: authSlice.reducer
        auth: authReducer,
        counter: counterReducer
    }
})

export default store;