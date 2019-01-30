import * as types from '../actions/ActionTypes';

const initialState = {
  brand: '',
  error: null
}

export default function test(state, action) {
  if (typeof state === "undefined") {
    state = initialState;
  }

  switch(action.type) {
    case types.TEST_REQUEST:
      return {
        ...state
      };
    case types.TEST_SUCCESS:
      return {
        ...state
      };
    case types.TEST_FAILURE:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
}
