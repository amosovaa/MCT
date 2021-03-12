import { signupAC } from '../redux/actionCreators';
import { signinAC, errorAC, deleteAC } from '../redux/actionCreators';
import { adminFormAC } from '../redux/actionCreators';

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
      .then((data) => {
        if (data.success === true) {
          dispatch(signupAC(data)) && dispatch(errorAC(''));
        } else {
          dispatch(errorAC(data));
        }
      });
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
      .then((data) => {
        if (data.success === true) {
          dispatch(signinAC(data));
        } else {
          dispatch(errorAC(data));
        }
      });
  };
};

export const fetchAdminFormAC = (
  cityName,
  hotelName,
  dateIn,
  timeIn,
  dateOut,
  timeOut,
  hotelAddress,
  hallAddress,
  timeRepetition,
  timeRepetitionEnd,
  timeConcert,
  timeConcertSecond,
  lunchAddress,
  timeLunch,  
  timeBreakfast,
  timeDinner,
  dinnerAddress,
  breakfastAddress
) => {
  return (dispatch) => {
    fetch('/cities', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        cityName,
        hotelName,
        dateIn,
        timeIn,
        dateOut,
        timeOut,
        hotelAddress,
        hallAddress,
        timeRepetition,
        timeRepetitionEnd,
        timeConcert,
        timeConcertSecond,
        lunchAddress,
        timeLunch,
        timeBreakfast,
        timeDinner,
        dinnerAddress,
        breakfastAddress
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(adminFormAC(data)));
  };
};

export const fetchDelete = (id) => {
  return (dispatch) => {
    fetch(`/cities/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => dispatch(deleteAC(data)));
  };
};
