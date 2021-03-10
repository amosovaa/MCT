import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignUpAC } from '../../redux/thunkAC';
import styles from './signup.module.scss';
import translate from '../i18n/translate';

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
      <form className={styles.wrapper__form} onSubmit={handlerSignup}>
        <label htmlFor='username'>
          {translate('username')}
          <input type='text' name='username' required />
        </label>
        <label htmlFor='email'>
          {translate('email')}
          <input type='email' name='email' required />
        </label>
        <label htmlFor='password'>
          {translate('password')}
          <input type='password' name='password' required />
        </label>
        <button>{translate('signup')}</button>
        <div className={styles.error}>{error.msg}</div>
      </form>
    </div>
  );
}

export default Signup;
