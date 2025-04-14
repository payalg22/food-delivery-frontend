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
  },
});

const paymentActions = paymentSlice.actions;

export default paymentActions;
