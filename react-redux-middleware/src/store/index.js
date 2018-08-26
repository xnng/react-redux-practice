import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import promiseMiddleware from "redux-promise-middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, promiseMiddleware())
);

export default store;
