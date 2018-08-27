import * as types from "../constants";

const initialState = [
  {
    date: "2018-08-15T23:02",
    id: 0.414362169901018,
    text: "test"
  }
];

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

    case types.DELETE_REMINDER:
      return state.filter(reminder => reminder.id !== action.id);

    case types.CLEAR_REMINDERS:
      return [];

    default:
      return state;
  }
};
