import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUpAC } from '../../redux/thunkAC';
import styles from './signup.module.scss';

function Signup(props) {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.auth.error);
  console.log(error);
  const handlerSignup = (e) => {
    e.preventDefault();
    const {
      username: { value: username },
    } = e.target;
    const {
      email: { value: email },
    } = e.target;
    const {
      password: { value: password },
    } = e.target;
    dispatch(fetchSignUpAC(username, email, password));
    e.target.username.value = ``;
    e.target.email.value = ``;
    e.target.password.value = ``;
  };
  console.log(error);
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handlerSignup}>
        <label htmlFor="username">
          Username
          <input type="text" name="username" required />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" required />
        </label>
        <button>Signup</button>
        <div className={styles.error}>{error.msg}</div>
      </form>
    </div>
  );
}

export default Signup;
