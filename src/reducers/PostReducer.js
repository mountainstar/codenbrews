import { FETCH_POST } from '../actions/types';


const INITIAL_STATE = {
  all: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST:
      return { ...state, ...INITIAL_STATE, all: action.payload };
    default:
      return state;
  }
};
