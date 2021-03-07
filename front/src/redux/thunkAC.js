import { signupAC } from '../redux/actionCreators';
import { signinAC } from '../redux/actionCreators';
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
  timeLunch
) => {
  return (dispatch) => {
    fetch('/', {
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
      }),
    })
      .then((res) => res.json())
      .then((data) => dispatch(adminFormAC(data)));
  };
};
