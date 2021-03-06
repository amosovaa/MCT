import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupAC } from '../../redux/actionCreators';
import { fetchSignUpAC } from '../../redux/thunkAC';
import styles from './signup.module.scss';

function Signup(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store);
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
  console.log(store);
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handlerSignup}>
        <label htmlFor='username'>
          Username
          <input type='text' name='username' />
        </label>
        <label htmlFor='email'>
          Email
          <input type='email' name='email' />
        </label>
        <label htmlFor='password'>
          Password
          <input type='password' name='password' />
        </label>
        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;
