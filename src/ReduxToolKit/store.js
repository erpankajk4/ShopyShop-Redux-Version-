import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";

export const store = configureStore({
    reducer: {
        products: productReducer,
        userReducer : userReducer,
        cartReducer : cartReducer
    }
})