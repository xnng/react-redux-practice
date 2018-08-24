import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducer";

const store = createStore(rootReducer);

export default store;