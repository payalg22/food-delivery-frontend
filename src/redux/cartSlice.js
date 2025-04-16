import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    address: "",
    payment: "",
    notes: "",
    amount: 0,
    cartTotal: 0,
  },
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
    calculateCartTotal: (state) => {
      state.cartTotal = state.items.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      return state;
    },
    addAmount: (state, action) => {
      state.amount = action.payload;
      return state;
    },
    emptyCart: (state) => {
      state = {
        items: [],
        address: "",
        payment: "",
        notes: "",
        amount: 0,
        cartTotal: 0,
      };
      return state;
    },
  },
});

const cartActions = cartSlice.actions;

export default cartActions;
