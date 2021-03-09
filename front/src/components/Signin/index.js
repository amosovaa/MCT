import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchSignInAC } from '../../redux/thunkAC';
import { Link } from 'react-router-dom';
import styles from './signin.module.scss';
import {GoogleLogin} from 'react-google-login'
const responseGoogle = (response) => {
  console.log('YOU ARE LOGGED IN',response);
}

function Signin(props) {
  const dispatch = useDispatch();
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
          Email
          <input type="email" name="email" required />
        </label>
        <label htmlFor='password'>
          Password
          <input type="password" name="password" required />
        </label>
        <button>Signin</button>
        <Link className={styles.wrapper__link} to="/signup">
          <button className={styles.wrapper__else}>Create Account</button>
        </Link>
        <div className='google'>
          <GoogleLogin
        clientId='896470829448-1665l3ecilcmsreobkj144oq1n693ibs.apps.googleusercontent.com'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
          />
        </div>
      </form>
    </div>
  );
}

export default Signin;
