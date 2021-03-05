import { NAVBAR } from '../actionTypes';

const reducer = (state = { nav: false }, action) => {
  switch (action.type) {
    case NAVBAR:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
