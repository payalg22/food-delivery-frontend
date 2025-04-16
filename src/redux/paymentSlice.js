import { createSlice } from "@reduxjs/toolkit";

export const paymentSlice = createSlice({
  name: "payment",
  initialState: [
    {
      _id: "24sa89sr64ga6r87g45",
      number: "4562 4855 6397 5050",
      name: "Payal G",
      cvv: "123",
      expiry: "12/26",
    },
  ],
  reducers: {
    setPayment: (state, action) => {
      return action.payload;
    },
    addCard: (state, action) => {
      //check if card exists
      const isCard = state.findIndex((card) => card._id === action.payload._id);
      if (isCard !== -1) {
        state[isCard] = action.payload;
      } else {
        state.push(action.payload);
      }
      return state;
    },
    removeCard: (state, action) => {
      return state.filter((card) => card._id !== action.payload);
    },
  },
});

const paymentActions = paymentSlice.actions;

export default paymentActions;
