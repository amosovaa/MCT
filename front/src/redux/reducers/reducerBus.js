import { INIT_COORDS } from '../actionTypes';

const reducer = (state = { }, action) => {
  switch (action.type) {
    case INIT_COORDS:
      return { ...state, coords: action.payload };
    default:
      return state;
  }
};

export default reducer;
