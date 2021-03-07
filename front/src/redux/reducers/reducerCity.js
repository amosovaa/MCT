import { ADD_CITY } from '../actionTypes';

const reducer = (state = { cities: [] }, action) => {
  switch (action.type) {
    case ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] };
    default:
      return state;
  }
};

export default reducer;
