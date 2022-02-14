import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";
let middlewares = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
