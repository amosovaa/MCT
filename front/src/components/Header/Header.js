import React from "react";
import Menu from "../Menu/Menu";

function Header(props) {
  return (
    <header id="header">
      <nav>
        <a href="#menu">Menu</a>

        {/* <Link to="/menu">menu</Link> */}

        {/* <Menu /> */}
      </nav>
    </header>
  );
}

export default Header;
