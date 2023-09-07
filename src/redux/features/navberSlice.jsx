import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    toggle: false,
}

export const navberSlice = createSlice({
    name: "navber",
    initialState,
    reducers: {
        navber: (state, action) => {
            state.toggle = !state.toggle;
        }
    }
})

// Action creators are generated for each case reducer function
export const { navber } = navberSlice.actions;

export default navberSlice.reducer;