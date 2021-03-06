import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
function Header(props) {
  return (
    <header id='header'>
      <ul className={styles.wrapper}>
        <li>
          <Link className={styles.wrapper__link} to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/cabinet'>
            Cabinet
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/team'>
            Team
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/signup'>
            Signup
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/signin'>
            Signin
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/logout'>
            Logout
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
