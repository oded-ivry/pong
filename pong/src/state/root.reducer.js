import { combineReducers } from "redux";
import scoreBoardReducer from "./scoreBoard.slice";


const rootReducer = combineReducers({
    scoreBoard: scoreBoardReducer
});

export default rootReducer;
