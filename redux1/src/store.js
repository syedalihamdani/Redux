import rootreducer from "./reducers/index";
import { createStore } from "redux";
const store= createStore(rootreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;