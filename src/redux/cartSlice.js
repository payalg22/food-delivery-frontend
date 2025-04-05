import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        itemInCart: (state, action) => {
            return action.payload;
        },
        removeFromCart: (state, action) => {
            const isItem = state.findIndex((item) => item._id === action.payload);
            if(state[isItem].quantity === 1) {
                return state.filter(item => item._id !== action.payload);
            } else {
                state[isItem].quantity--;
                return state;
            }
        },
        addToCart: (state, action) => {
            const isItem = state.findIndex((item) => item._id === action.payload._id);
            if(isItem == -1) {
                state.push({...action.payload, quantity: 1});
            } else {
                state[isItem].quantity++;
                return state;
            }
        }
    }
});

const cartActions = cartSlice.actions;

export default cartActions;