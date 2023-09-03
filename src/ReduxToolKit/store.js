import { configureStore, getDefaultMiddleware  } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import  {myCartReducer}  from "./cartReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        userReducer : userReducer,
        myCartReducer : myCartReducer
    },
    middleware:[...getDefaultMiddleware()]
})