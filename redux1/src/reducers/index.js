//  We can make multipule reducers 
// but There is only one root reducer which is main reducer.We make here.
import changeTheNumber from "./upDown";
import { combineReducers } from "redux";
const rootreducer=combineReducers({
    changeTheNumber
    // We have only one reducer.In case we have other reducers.We can write like this
    // changeBackgroud,
    // othe combineReducers,
})

export default rootreducer;