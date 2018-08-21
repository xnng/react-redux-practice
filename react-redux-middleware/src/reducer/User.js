import * as ActionType from "../ActionType";

const initialState = {
  isFetching: false,
  error: null,
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        error: null,
        user: action.user
      };
    case ActionType.FETCH_USER_REQUEST:
      return {
        isFetching: true,
        error: null,
        user: {}
      };
    case ActionType.FETCH_USER_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        user: {}
      };
    default:
      return state;
  }
};
