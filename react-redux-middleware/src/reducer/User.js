import * as types from "../constants";

const initialState = {
  initName: "waiting for clicking"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USER_SUCCESS:
      return {
        initName: action.user.name
      };

    default:
      return state;
  }
};
