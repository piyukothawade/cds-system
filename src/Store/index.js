import { configureStore } from "@reduxjs/toolkit";
//import userReducer from "./UserSlice";
import userReducer from "./userReducer";

const store = configureStore({
    reducer:{
        user: userReducer
    }
});
export default store;