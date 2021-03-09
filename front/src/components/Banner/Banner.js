import React from 'react';
import { Link } from 'react-router-dom';
import styles from './banner.module.scss';

function Banner(props) {
  return (
    <div>
      <section id="banner" className="major">
        <div className="inner">
          <div className={styles.wrapper}>
            <header className="major">
              <h1>My Concert Tour</h1>
            </header>
            <div className="content">
              <p>
                Create your own tour for an orchestra
                <br />
                or travel group with MCP App
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
        </div>
      </section>
    </div>
  );
}

export default Banner;
