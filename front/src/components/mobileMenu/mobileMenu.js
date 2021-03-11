import React from 'react';
import styles from './menu.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { navAC } from '../../redux/actionCreators';

function Menu(props) {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const nav = useSelector((store) => store.state);
  const dispatch = useDispatch();

  const handlerMobile = () => {
    nav.nav = !nav.nav;
    dispatch(navAC());
  };
  return (
    <>
      <ul className={styles.links}>
        <li>
          <Link onClick={handlerMobile} className={styles.links__link} to="/">
            Home
          </Link>
        </li>
        <li>
          {isAuth === true && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/cabinet"
            >
              Cabinet
            </Link>
          )}
        </li>
        <li>
          {isAuth === true && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/bus"
            >
              Bus
            </Link>
          )}
        </li>
        <li>
          <Link
            onClick={handlerMobile}
            className={styles.links__link}
            to="/team"
          >
            Team
          </Link>
        </li>
        <li>
          {isAuth === false && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/signup"
            >
              Signup
            </Link>
          )}
        </li>
        <li>
          {isAuth === false && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/signin"
            >
              Signin
            </Link>
          )}
        </li>
        <li>
          {isAuth === true && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/forgottenThings"
            >
              Things
            </Link>
          )}
        </li>
        <li>
          {isAuth === true && (
            <Link
              onClick={handlerMobile}
              className={styles.links__link}
              to="/logout"
            >
              Logout
            </Link>
          )}
        </li>
      </ul>
    </>
  );
}

export default Menu;
