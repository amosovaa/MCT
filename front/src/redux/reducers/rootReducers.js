import { combineReducers } from 'redux';

import reducerUser from './reducerUser';
import reducerState from './reducerState';
import reducerCity from './reducerCity';

const rootReducer = combineReducers({
  auth: reducerUser,
  state: reducerState,
  cities: reducerCity,
});

export default rootReducer;
