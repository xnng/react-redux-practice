import * as types from "../constants";
import Cookies from "js-cookie";

const reminder = action => {
  return {
    text: action.text,
    id: Math.random(),
    date: action.date
  };
};

export default (
  state = Cookies.get("reminders") ? JSON.parse(Cookies.get("reminders")) : [],
  action
) => {
  let reminders = [];
  switch (action.type) {
    case types.ADD_REMINDER:
      reminders = [...state, reminder(action)];
      Cookies.set("reminders", reminders);
      return reminders;

    case types.DELETE_REMINDER:
      reminders = state.filter(reminder => reminder.id !== action.id);
      Cookies.set("reminders", reminders);
      return reminders;

    case types.CLEAR_REMINDERS:
      Cookies.set("reminders", reminders);
      return reminders;

    default:
      return state;
  }
};
