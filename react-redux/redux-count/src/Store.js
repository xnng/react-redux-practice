import { createStore } from "redux";
import Reducer from "./Reducer";

const initValues = {
  count: 0
};

const store = createStore(Reducer, initValues);

export default store;
