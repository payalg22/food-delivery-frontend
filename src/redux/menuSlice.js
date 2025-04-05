import { createSlice } from "@reduxjs/toolkit";

export const menuSlice = createSlice({
    name: "menu",
    initialState: [],
    reducers: {
        setMenu: (state, action) => {
           return action.payload;
        }
    }
});

const menuActions = menuSlice.actions;

export default menuActions;