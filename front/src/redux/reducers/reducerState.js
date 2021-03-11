import { NAVBAR, CARD, COORD_BUS } from '../actionTypes';

const reducer = (state = { nav: false, card: false, coords:{} }, action) => {
  switch (action.type) {
    case NAVBAR:
      return { ...state };
    case CARD:
      return { ...state };
    case COORD_BUS:
      return { ...state, coords:action.payload}
    default:
      return state;
  }
};

export default reducer;
