import * as types from "../constants";

export const increment = () => {
  return { type: types.INCREMENT };
};

export const decrement = () => {
  return { type: types.DECREMENT };
};