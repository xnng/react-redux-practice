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
    axios
      .get("https://5b80183d97d8e500144f2cf7.mockapi.io/user")
      .then(res => {
        dispatch({
          type: types.FETCH_USER_SUCCESS,
          user: res.data[0]
        });
      })
      .catch(error => {
        console.log(error.message);
      });
  };
};
