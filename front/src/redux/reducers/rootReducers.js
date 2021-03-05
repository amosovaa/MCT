import { combineReducers } from 'redux';

import reducerUser from './reducerUser';
import reducerState from './reducerState';

const rootReducer = combineReducers({
  auth: reducerUser,
  state: reducerState,
});

export default rootReducer;
