import * as types from "../constants";

const initialState = {
  initName: "",
  isFetching: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_USER_FULFILLED:
      return {
        initName: action.payload.data[0].name,
        isFetching: false,
        error: null
      };

    case types.LOAD_USER_PENDING:
      return {
        initName: null,
        isFetching: true,
        error: null
      };

    case types.LOAD_USER_REJECTED:
      return {
        initName: null,
        isFetching: false,
        error: action.payload.response.data
      };

    default:
      return state;
  }
};
