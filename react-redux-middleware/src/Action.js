import * as ActionTypes from "./ActionType";

export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.INCREMENT
      });
    },2000);
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT
  };
};
