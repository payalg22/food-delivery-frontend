import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./menuSlice";
import { cartSlice } from "./cartSlice";

export const deliveryStore = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer
    }
})