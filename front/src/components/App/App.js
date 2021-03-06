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
function App() {
  const store = useSelector((store) => store.state);
  console.log(store);
  return (
    <>
      <Router>
        <div className={styles.wrapper}>
          <Header />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/landing">
              <div>landing</div>
            </Route>
            <Route path="/signup">
              <Signup />
              {/* <Redirect to="/" /> */}
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/logout">
              <Redirect to="/" />
              <Logout />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
