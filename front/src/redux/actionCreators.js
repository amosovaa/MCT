import { SIGNUP_SUCCESS, SIGNIN_SUCCESS, NAVBAR } from './actionTypes';

export const signupAC = (payload) => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signinAC = (payload) => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const navAC = (payload) => {
  return {
    type: NAVBAR,
    payload,
  };
};
