import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    showToggle : false
  },
  reducers: {
    increment : state => {
        state.value += 1
    },
    decrement : state => {
        state.value -= 1
    },
    /* ADD THE OTHERS */
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
