import * as types from "../constants";

export const addReminder = (text, date) => ({
  type: types.ADD_REMINDER,
  text,
  date
});

export const deleteReminder = (id) => ({
  type: types.DELETE_REMINDER,
  id
})

export const clearReminders = () => ({
  type: types.CLEAR_REMINDERS,
})

