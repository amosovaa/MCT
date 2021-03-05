import HomePage from '../HomePage/HomePage';
import Header from '../Header/Header';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './app.module.scss';
import Signup from '../Signup';
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
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
