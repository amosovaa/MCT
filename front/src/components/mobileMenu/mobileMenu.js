import React from 'react';
import styles from './menu.module.scss';

function Menu(props) {
  return (
    <>
      <ul className={styles.links}>
        <li>
          <a href='index.html'>Home</a>
        </li>
        <li>
          <a href='landing.html'>Landing</a>
        </li>
        <li>
          <a href='generic.html'>Generic</a>
        </li>
        <li>
          <a href='elements.html'>Elements</a>
        </li>
        <ul className='actions stacked'>
          <li>
            <a href='#' className='button primary fit'>
              Get Started
            </a>
          </li>
          <li>
            <a href='#' className='button fit'>
              Log In
            </a>
          </li>
        </ul>
      </ul>
    </>
  );
}

export default Menu;
