import React from 'react';
import { Link } from 'react-router-dom';

function Banner(props) {
  return (
    <div>
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1>Hi, welcome to «My Concert Tour»</h1>
          </header>
          <div className="content">
            <p>
              Create your own tour for an orchestra
              <br />
              or touristic group.
            </p>
            <ul className="actions">
              <li>
                <Link to="/signin" className="button next scrolly">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
