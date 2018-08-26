import * as types from "../constants";

const initialState = {
  initName: "",
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        initName: action.user.name,
        isFetching: false,
        error: null
      };

    case types.FETCH_USER_REQUEST:
      return {
        initName: null,
        isFetching: true,
        error: null
      };

    case types.FETCH_USER_FAILURE:
      return {
        initName: null,
        isFetching: false,
        error: action.error
      };

    default:
      return state;
  }
};
