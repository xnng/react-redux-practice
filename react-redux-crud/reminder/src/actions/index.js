import * as types from "../constants";

export const addReminder = (text, date) => ({
  type: types.ADD_REMINDER,
  text,
  date
});
