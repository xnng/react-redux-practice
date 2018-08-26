import * as types from "../constants";
import axios from "axios";

export const increment = () => {
  return { type: types.INCREMENT };
};

export const decrement = () => {
  return { type: types.DECREMENT };
};

export const get_user = () => {
  return dispatch => {
    dispatch(fetch_user_request());
    axios
      .get(types.API)
      .then(res => {
        dispatch(fetch_user_success(res.data[0]));
      })
      .catch(error => {
        dispatch(fetch_user_failure(error.message));
      });
  };
};

const fetch_user_success = user => {
  return {
    type: types.FETCH_USER_SUCCESS,
    user
  };
};

const fetch_user_request = () => {
  return {
    type: types.FETCH_USER_REQUEST
  };
};

const fetch_user_failure = error => {
  return {
    type: types.FETCH_USER_FAILURE,
    error
  };
};
