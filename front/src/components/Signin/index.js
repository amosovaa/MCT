import React from 'react';
import { useDispatch } from 'react-redux';
import { signinAC } from '../../redux/actionCreators';
import { fetchSignInAC } from '../../redux/thunkAC';
import { Link } from 'react-router-dom';
import styles from './signin.module.scss';

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
        <label htmlFor="email">
          Email
          <input type="email" name="email" required />
        </label>
        <label htmlFor="password">
          Password
          <input type="password" name="password" required />
        </label>
        <button>Signin</button>
        <Link className={styles.wrapper__link} to="/signup">
          <button className={styles.wrapper__else}>Create Accaunt</button>
        </Link>
      </form>
    </div>
  );
}

export default Signin;
