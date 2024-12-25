
import todoReducer from "./slice/todoSlice";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer :{
        todo : todoReducer
    },
    devTools :true
});

export default store;
