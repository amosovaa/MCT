import HomePage from '../HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector((store) => store.state);
  console.log(store);
  return (
    <>
      <Router>
        <HomePage />
        <div className="App"></div>

        <Switch>
          <Route path="/">{store.nav && <Menu />}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
