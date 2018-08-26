import * as types from "../constants";

const initialState = [];

const reminder = action => {
  return {
    text: action.text,
    id: Math.random(),
    date: action.date
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_REMINDER:
      return [...state, reminder(action)];

    default:
      return state;
  }
};
