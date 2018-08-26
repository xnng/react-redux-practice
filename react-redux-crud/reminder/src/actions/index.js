import * as types from "../constants";

export const addReminder = text => ({
  type: types.ADD_REMINDER,
  text
});
