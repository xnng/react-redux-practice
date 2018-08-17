import * as ActionTypes from './ActionType';

export const increment = () => {
  return {
      type: ActionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
      type: ActionTypes.DECREMENT
  };
};
