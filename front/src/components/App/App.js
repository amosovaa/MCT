import HomePage from "../HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Menu from "../Menu/Menu";
import Landing from "../Landing/Landing";

function App() {
  const store = useSelector((store) => store.state);
  return (
    <>
        <Switch>
          <Route path="/menu">
            <Menu />
          </Route>
          <Route path="/landing">
            <Landing/>
          </Route>
        </Switch>
        <div className="App"></div>
        <HomePage />
    </>
  );
}

export default App;
