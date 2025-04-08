import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], address: "", payment: "", notes: "" },
  reducers: {
    itemsInCart: (state, action) => {
      return action.payload;
    },
    removeFromCart: (state, action) => {
      const isItem = state.items.findIndex(
        (item) => item._id === action.payload
      );
      if (state.items[isItem].quantity === 1) {
        state.items = state.items.filter((item) => item._id !== action.payload);
      } else {
        state.items[isItem].quantity--;
      }
      return state;
    },
    addToCart: (state, action) => {
      const isItem = state.items.findIndex(
        (item) => item._id === action.payload._id
      );
      if (isItem == -1) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        state.items[isItem].quantity++;
        return state;
      }
    },
    selectAddress: (state, action) => {
      state.address = action.payload;
      return state;
    },
    selectPayment: (state, action) => {
      state.payment = action.payload;
      return state;
    },
    addNotes: (state, action) => {
      state.notes = action.payload;
      return state;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartActions;
