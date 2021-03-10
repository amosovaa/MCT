import { NAVBAR, CARD } from '../actionTypes';

const reducer = (state = { nav: false, card: false }, action) => {
  switch (action.type) {
    case NAVBAR:
      return { ...state };
    case CARD:
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
