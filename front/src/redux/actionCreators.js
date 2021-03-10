import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
  NAVBAR,
  ADD_CITY,
  DELETE_CITY,
  ERROR,
  SET_DEFAULT_CITY,
  ADD_PICTURE,
  ADD_NAME,
  ADD_IMAGE
} from './actionTypes';

export const addPictureAC = (payload) => {
  return {
    type: ADD_PICTURE,
    payload,
  };
};

export const addNameAC = (payload) => {
  return {
    type: ADD_NAME,
    payload,
  };
};

export const addImageAC = (payload) => {
  return {
    type: ADD_IMAGE,
    payload,
  };
};

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

export const errorAC = (payload) => {
  return {
    type: ERROR,
    payload,
  };
};

export const logoutAC = (payload) => {
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};

export const navAC = (payload) => {
  return {
    type: NAVBAR,
    payload,
  };
};

export const adminFormAC = (payload) => {
  return {
    type: ADD_CITY,
    payload,
  };
};

export const setDefaultCityAC = (Idcity) => {
  return {
    type: SET_DEFAULT_CITY,
    payload: Idcity,
  };
};

export const deleteAC = (payload) => {
  return {
    type: DELETE_CITY,
    payload, 
  }
}