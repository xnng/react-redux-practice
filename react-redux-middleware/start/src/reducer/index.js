import { combineReducers } from "redux";
import count from "./Count";
import user from "./User";

const rootReducer = combineReducers({
  count,
  user
});

export default rootReducer;
