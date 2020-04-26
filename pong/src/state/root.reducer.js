import { combineReducers } from "redux";
import scoreBoardReducer from "./scoreBoard.slice";
import countReducer from "./count.slice";


const rootReducer = combineReducers({
    scoreBoard: scoreBoardReducer,
    count: countReducer,
});

export default rootReducer;
