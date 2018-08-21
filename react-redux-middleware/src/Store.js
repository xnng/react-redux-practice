import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer/CombineReducer";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
