import React from "react";
import Menu from "../Menu/Menu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function Header(props) {
  return (
    <header id="header">
      <nav>
        <Link to="/menu">menu</Link>

        {/* <Menu /> */}
      </nav>
    </header>
  );
}

export default Header;
