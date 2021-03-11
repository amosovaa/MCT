import React from 'react';
import styles from './footer.module.scss'

function Footer(props) {
  return (
    <div className={styles.bottom}>
      <footer className={styles.wrapper} id='footer'>
        <ul className='copyright'>
          <li> MyConcertTour &copy; 2021</li>
          <li>
            Made by &nbsp;
            <a href='https://github.com/ijustnothing/MCT'>Elbrus AAAA-Team</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
