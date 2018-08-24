import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(logger,thunk));

export default store;
