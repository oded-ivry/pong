import { createSlice } from "@reduxjs/toolkit";

const scoreBoardSlice = createSlice({
  name: "scoreBoard",
  initialState: {},
  reducers: {
    addNewScore: (state, action) => action.payload
  }
});

export default scoreBoardSlice.reducer;
export const { addNewScore } = scoreBoardSlice.actions;