import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, LOGOUT_SUCCESS } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preState = {};

if (state) {
  preState = {
    auth: state.auth,
    isAuth: state.auth.isAuth,
  };
} else {
  preState = { auth: {}, isAuth: false };
}

const reducer = (state = preState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, isAuth: true, auth: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, isAuth: true, auth: action.payload };
    case LOGOUT_SUCCESS:
      window.localStorage.removeItem('state');
      window.localStorage.removeItem('token');
      return { ...state, auth: {}, isAuth: false };
    default:
      return state;
  }
};

export default reducer;
