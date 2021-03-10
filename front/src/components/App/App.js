import React, { useState } from 'react';
import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './app.module.scss';
import Signup from '../Signup';
import Signin from '../Signin';
import Logout from '../Logout';
import MobileMenu from '../mobileMenu/mobileMenu';
import Cabinet from '../Cabinet/Cabinet';
import Schedule from '../Schedule/Schedule';
import AdminCabinet from '../AdminCabinet/AdminCabinet';
import Team from '../Team/Team';
import ForgottenThings from '../ForgottenThings/ForgottenThings'
import Bus from '../Bus/Bus'
import { I18Provider, LOCALES } from '../i18n';
import translate from '../i18n/translate';

function App() {
  const isAuth = useSelector((store) => store.auth.isAuth);
  // const isAdmin = useSelector((store => store.auth.auth.user.isAdmin))
  const nav = useSelector((store) => store.state);
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  // console.log(isAdmin);
  return (
    <I18Provider locale={locale}>
      <Router>
        <div className={styles.wrapper}>
          <Header locale={locale} setLocale={setLocale} />
          {nav.nav && <MobileMenu />}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/cabinet">
              {isAuth === false ? <Redirect to="/signin" /> : <Cabinet />}
            </Route>
            <Route path='/bus'>
              <Bus/>
            </Route>
            <Route path='/signup'>
              <Signup />
              {isAuth === true && <Redirect to="/cabinet" />}
              {/* <Redirect to="/" /> */}
            </Route>
            <Route path="/signin">
              {isAuth === true && <Redirect to="/cabinet" />}
              <Signin />
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/forgottenThings">
              <ForgottenThings />
            </Route>
            <Route path="/logout">
              {isAuth === false && <Redirect to="/" />}
              <Logout />
            </Route>
            <Route path="/cabinets/schedule">
              {isAuth === false && <Redirect to="/" />}
              <Schedule />
            </Route>
            <Route path="/cabinets/admincabinet">
              {isAuth === false && <Redirect to="/" />}
              <AdminCabinet />
            </Route>
          </Switch>
        </div>
      </Router>
    </I18Provider>
  );
}

export default App;
