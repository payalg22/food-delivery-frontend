import { createSlice } from "@reduxjs/toolkit";

export const addressSlice = createSlice({
  name: "address",
  initialState: [],
  reducers: {
    setAddresses: (state, action) => {
        return action.payload;
    },
    setDefaultAddress: (state, action) => {
      state.forEach((addr) => {
        if(addr._id === action.payload) {
            addr.isDefault = true;
        } else {
            addr.isDefault = false;
        }
        return addr;
      });
      return state;
    },
    removeAddress: (state, action) => {
      state.push(action.payload);
      return state;
    },
    addAddress: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

const addressActions = addressSlice.actions;

export default addressActions;
