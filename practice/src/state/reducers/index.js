import reducerAmount from "./reducers";
import { combineReducers } from "redux";

const reducers=combineReducers({
    amount:reducerAmount
})

export default reducers;

