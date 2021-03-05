import HomePage from '../HomePage/HomePage';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector((store) => store.state);
  return (
    <>
      <Router>
        <HomePage />
        <div className="App"></div>

        <Switch>
          <Route path="/menu">{store.nav ? <Menu /> : undefined}</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
