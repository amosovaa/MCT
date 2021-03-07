import { ADD_CITY, INIT_CITIES } from '../actionTypes';

const reducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] };
    case INIT_CITIES:
      return { ...state, cities: [...action.payload] };
    default:
      return state;
  }
};

export default reducer;
