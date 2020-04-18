import { configureStore } from "@reduxjs/toolkit";
import scoreBoardReducer from "./scoreBoard.slice";

const store = configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer
  },
  preloadedState: {}
});

export default store;

