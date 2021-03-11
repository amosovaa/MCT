import {
  SIGNUP_SUCCESS,
  SIGNIN_SUCCESS,
  LOGOUT_SUCCESS,
  NAVBAR,
  ADD_CITY,
  CARD,
  DELETE_CITY,
  ERROR,
  SET_DEFAULT_CITY,
  ADD_PICTURE,
  ADD_NAME,
  ADD_IMAGE,
  CHANGE_PROGRESS,
  ERROR_FOUND,
  ERROR_MESSAGE,
  INIT_PHOTOS,
  DELETE_PHOTOS
} from './actionTypes';

export const addPictureAC = (payload) => {
  return {
    type: ADD_PICTURE,
    payload,
  };
};

export const deletePhotosAC = (payload) => {
  return {
    type: DELETE_PHOTOS,
    payload,
  };
};

export const initPhotosAC = (payload) => {
  return {
    type: INIT_PHOTOS,
    payload,
  };
};

export const errorFoundAC = (payload) => {
  return {
    type: ERROR_FOUND,
    payload,
  };
};

export const errorMessageAC = (payload) => {
  return {
    type: ERROR_MESSAGE,
    payload,
  };
};

export const progressAC = (payload) => {
  return {
    type: CHANGE_PROGRESS,
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

export const cardAC = (payload) => {
  return {
    type: CARD,
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