import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  ERROR,
  LOGOUT_SUCCESS,
} from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preState = {};

if (state) {
  preState = {
    auth: state.auth,
    isAuth: state.auth.isAuth,
    error: state.error || '',
  };
} else {
  preState = { auth: {}, error: '', isAuth: false };
}

const reducer = (state = preState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, isAuth: true, auth: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, isAuth: true, auth: action.payload };
    case ERROR:
      return { ...state, error: action.payload };
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem('state');
      window.localStorage.removeItem('token');
      return { ...state, auth: {}, isAuth: false };
    default:
      return state;
  }
};

export default reducer;
