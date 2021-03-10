import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { navAC } from '../../redux/actionCreators';

function Header(props) {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();
  const nav = useSelector((store) => store.state);
  const handlerMobile = () => {
    nav.nav = !nav.nav;
    dispatch(navAC());
  };

  return (
    <header className={styles.visibleMenu} id="header">
      <ul className={styles.wrapper}>
        <li>
          <Link className={styles.wrapper__linkFirst} to="/">
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
      <div onClick={handlerMobile} className={styles.mobile}>
        MenuMobile
      </div>
    </header>
  );
}

export default Header;
