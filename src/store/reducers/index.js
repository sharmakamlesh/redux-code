import CounterReducers from "./countReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    count: CounterReducers
});

export default rootReducer;