import HomePage from "../HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "../Menu/Menu";

function App() {
  return (
    <>
      {/* <HomePage /> */}
      <Router>
        <div className="App"></div>
        <nav>
          <ul>
            <li>
              <Link to="/menu">menu</Link>
            </li>
          </ul>
        </nav>


        <Switch>
          {/* <Route exact path="/">
            <div>
              ooooooooooo
            </div>
          </Route> */}
          <Route path="/menu">
            <Menu />
            
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
