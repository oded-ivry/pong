import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => state + 1
  }
});

export default countSlice.reducer;
export const { increment, decrement } = countSlice.actions;