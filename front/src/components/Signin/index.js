import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSignInAC } from '../../redux/thunkAC';
import { Link } from 'react-router-dom';
import styles from './signin.module.scss';
import translate from '../i18n/translate';

function Signin(props) {
  const dispatch = useDispatch();
  const error = useSelector((store) => store.auth.error);
  const handlerSignin = (e) => {
    e.preventDefault();
    const {
      email: { value: email },
    } = e.target;
    const {
      password: { value: password },
    } = e.target;
    dispatch(fetchSignInAC(email, password));
    e.target.email.value = ``;
    e.target.password.value = ``;
  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.wrapper__form} onSubmit={handlerSignin}>
        <label htmlFor='email'>
          {translate('email')}
          <input type='email' name='email' required />
        </label>
        <label htmlFor='password'>
          {translate('password')}
          <input type='password' name='password' required />
        </label>
        <button>{translate('signin')}</button>
        <Link className={styles.wrapper__link} to='/signup'>
          <button className={styles.wrapper__else}>
            {translate('createAcc')}
          </button>
        </Link>
        <div className={styles.error}>{error.msg}</div>
      </form>
    </div>
  );
}

export default Signin;
