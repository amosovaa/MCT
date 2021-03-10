import { combineReducers } from 'redux';

import reducerUser from './reducerUser';
import reducerState from './reducerState';
import reducerCity from './reducerCity';
import reducerBus from './reducerBus'

const rootReducer = combineReducers({
  auth: reducerUser,
  state: reducerState,
  cities: reducerCity,
  coords: reducerBus,
});

export default rootReducer;
