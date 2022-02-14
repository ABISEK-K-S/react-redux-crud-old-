import { combineReducers } from "redux";
import storeReducer from "./reducers/storeReducer";

const rootReducer = combineReducers({
  storeReducer
});

export default rootReducer;
