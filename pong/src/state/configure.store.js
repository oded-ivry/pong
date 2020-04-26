import { configureStore } from "@reduxjs/toolkit";
import scoreBoardReducer from "./scoreBoard.slice";
import countReducer from "./count.slice";


const store = configureStore({
  reducer: {
    scoreBoard: scoreBoardReducer,
    count: countReducer
  },
  preloadedState: {}
});

export default store;