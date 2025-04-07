import { configureStore } from "@reduxjs/toolkit";
import { menuSlice } from "./menuSlice";
import { cartSlice } from "./cartSlice";
import { addressSlice } from "./addressSlice";

export const deliveryStore = configureStore({
    reducer: {
        menu: menuSlice.reducer,
        cart: cartSlice.reducer,
        address: addressSlice.reducer,
    }
})