import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './app.module.scss';
import Signup from '../Signup';
import Signin from '../Signin';
import Logout from '../Logout';
import Cabinet from '../Cabinet/Cabinet';
import Schedule from '../Schedule/Schedule';
import AdminCabinet from '../AdminCabinet/AdminCabinet';

function App() {
  const store = useSelector((store) => store.state);
  console.log(store);
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/cabinet'>
              <Cabinet />
            </Route>
            <Route path='/signup'>
              <Signup />
              {/* <Redirect to="/" /> */}
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path='/logout'>
              <Redirect to='/' />
              <Logout />
            </Route>
            <Route path='/cabinets/schedule'>
              <Schedule />
            </Route>
            <Route path='/cabinets/admincabinet'>
              <AdminCabinet />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
