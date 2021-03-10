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
      <ul className={styles.links}>
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
      </ul>
    </>
  );
}

export default Menu;
