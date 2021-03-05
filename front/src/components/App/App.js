import HomePage from "../HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function App() {
  return (
    <>
      <Router>
        <HomePage />
        <div className="App"></div>

        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
