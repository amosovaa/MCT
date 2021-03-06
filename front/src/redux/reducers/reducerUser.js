import { SIGNUP_SUCCESS, SIGNIN_SUCCESS,LOGOUT_SUCCESS } from '../actionTypes';

const state = JSON.parse(window.localStorage.getItem('state'));
let preState = {};

if (state) {
  preState = {
    auth: state.user
  };
}
// } else {
//   preState = {};
// }

const reducer = (state = preState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return { ...state, auth: action.payload };
    case SIGNIN_SUCCESS:
      return { ...state, auth: action.payload };
      case LOGOUT_SUCCESS:
        window.localStorage.removeItem('state')
        window.localStorage.removeItem('token')
      return { ...state, auth: {} };
    default:
      return state;
  }
};

export default reducer;
