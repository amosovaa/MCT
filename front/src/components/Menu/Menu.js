import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Menu(props) {
  return (
      <>
      <ul class="links">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
        <Link to="/landing">Landing</Link>
        </li>
        <li>
          <a href="generic.html">Generic</a>
        </li>
        <li>
          <a href="elements.html">Elements</a>
        </li>
      </ul>
      <ul class="actions stacked">
        <li>
          <a href="#" class="button primary fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" class="button fit">
            Log In
          </a>
        </li>
      </ul>
    </>
  );
}

export default Menu;
