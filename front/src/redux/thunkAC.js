import { signupAC } from '../redux/actionCreators';
import { signinAC } from '../redux/actionCreators';

// thunk AC
export const fetchSignUpAC = (username, email, password) => {
  return (dispatch) => {
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(signupAC(data)));
  };
};

export const fetchSignInAC = (email, password) => {
  return (dispatch) => {
    fetch('/signin', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(signinAC(data)));
  };
};
