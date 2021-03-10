import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './header.module.scss';
import { navAC } from '../../redux/actionCreators';
import { I18Provider, LOCALES } from '../i18n';
import translate from '../i18n/translate';

function Header({ locale, setLocale }) {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const dispatch = useDispatch();
  const nav = useSelector((store) => store.state);
  const handlerMobile = () => {
    nav.nav = !nav.nav;
    dispatch(navAC());
  };

  return (
    <header className={styles.visibleMenu} id='header'>
      <ul className={styles.wrapper}>
        <li>
          <Link className={styles.wrapper__link} to='/'>
            {translate('home')}
          </Link>
        </li>
        <li>
          {isAuth === true && (
            <Link className={styles.wrapper__link} to='/cabinet'>
              {translate('cabinet')}
            </Link>
          )}
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/bus'>
            {translate('bus')}
          </Link>
        </li>
        <li>
          <Link className={styles.wrapper__link} to='/team'>
            {translate('team')}
          </Link>
        </li>
        <li>
          {isAuth === false && (
            <Link Link className={styles.wrapper__link} to='/signup'>
              {translate('signup')}
            </Link>
          )}
        </li>
        <li>
          {isAuth === false && (
            <Link className={styles.wrapper__link} to='/signin'>
              {translate('signin')}
            </Link>
          )}
        </li>
        <li>
          {isAuth === true && (
            <Link className={styles.wrapper__link} to='/logout'>
              {translate('logout')}
            </Link>
          )}
        </li>
        <li>
          <button onClick={() => setLocale(LOCALES.ENGLISH)}> English </button>
          <button onClick={() => setLocale(LOCALES.RUSSIAN)}> Русский </button>
        </li>
      </ul>
      <div onClick={handlerMobile} className={styles.mobile}>
        MenuMobile
      </div>
    </header>
  );
}

export default Header;
