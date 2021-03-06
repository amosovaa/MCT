import React from 'react';
import { useDispatch } from 'react-redux';
import { signupAC } from '../../redux/actionCreators';
import styles from './signup.module.scss';

function Signup(props) {
  const dispatch = useDispatch();
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
    e.target.username.value = ``;
    e.target.email.value = ``;
    e.target.password.value = ``;
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper__form} onSubmit={handlerSignup}>
        <label htmlFor="username">
          Username
          <input type="text" name="username" />
        </label>
        <label htmlFor="email">
          Email
          <input type="email" name="email" />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" />
        </label>
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
