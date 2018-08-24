import * as types from "../constants";

const initialState = {
  initCount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        initCount: state.initCount + 1
      };

    case types.DECREMENT:
      return {
        initCount: state.initCount - 1
      };

    default:
      return state;
  }
};
