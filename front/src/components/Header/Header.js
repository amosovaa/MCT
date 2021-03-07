import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
function Header(props) {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const test = useSelector(store => store.auth)
  console.log(test);
  console.log(isAuth);
  return (
    <header id="header">
      <ul className={styles.wrapper}>
        <li>
          <Link className={styles.wrapper__link} to="/">
            Home
          </Link>
        </li>
        <li>
          {isAuth === true && (
            <Link className={styles.wrapper__link} to="/cabinet">
              Cabinet
            </Link>
          )}
        </li>
        <li>
          <Link className={styles.wrapper__link} to="/team">
            Team
          </Link>
        </li>
        <li>
          {isAuth === false && (
            <Link Link className={styles.wrapper__link} to="/signup">
              Signup
            </Link>
          )}
        </li>
        <li>
          {isAuth === false && (
            <Link className={styles.wrapper__link} to="/signin">
              Signin
            </Link>
          )}
        </li>
        <li>
          {isAuth === true && (
            <Link className={styles.wrapper__link} to="/logout">
              Logout
            </Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Header;
