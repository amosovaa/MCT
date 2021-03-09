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
import {GoogleLogin} from 'react-google-login'
import ForgottenThings from '../ForgottenThings/ForgottenThings';


function App() {
  const isAuth = useSelector((store) => store.auth.isAuth);
  const nav = useSelector((store) => store.state);
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          {nav.nav && <MobileMenu />}
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/cabinet">
              {isAuth === false ? <Redirect to="/signin" /> : <Cabinet />}
            </Route>
            <Route path="/signup">
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
              <ForgottenThings/>
            </Route>
            {/* forgottenThings */}
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
    </>
  );
}

export default App;
