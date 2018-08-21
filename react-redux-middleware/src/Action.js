import * as ActionTypes from "./ActionType";
import axios from "axios";

export const increment = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: ActionTypes.INCREMENT
      });
    }, 2000);
  };
};

export const decrement = () => {
  return {
    type: ActionTypes.DECREMENT
  };
};

export const getUser = () => {
  return dispatch => {
    dispatch(fetch_user_request());
    axios
      .get("https://randomuser.me/api/")
      .then(res => {
        dispatch(fetch_user(res.data.results[0]));
      })
      .catch(error => {
        dispatch(fetch_user_failure(error.response.data));
      });
  };
};

export const fetch_user_failure = (error) => {
  return {
    type: ActionTypes.FETCH_USER_FAILURE,
    error
  };
};

export const fetch_user = user => {
  return {
    type: ActionTypes.FETCH_USER_SUCCESS,
    user
  };
};

export const fetch_user_request = () => {
  return {
    type: ActionTypes.FETCH_USER_REQUEST
  };
};
