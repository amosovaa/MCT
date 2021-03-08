import { ADD_CITY, INIT_CITIES, SET_DEFAULT_CITY } from '../actionTypes';

const reducer = (state = { cities: [], defaultCity: null }, action) => {
  switch (action.type) {
    case ADD_CITY:
      return { ...state, cities: [...state.cities, action.payload] };
    case INIT_CITIES:
      return {
        ...state,
        cities: [...action.payload],
        defaultCity: action.payload[0],
      };
    case SET_DEFAULT_CITY:
      console.log(action.payload);
      return {
        ...state,
        defaultCity: state.cities.find((el) => el._id === action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
