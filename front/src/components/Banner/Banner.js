import React from 'react';
import { Link } from 'react-router-dom';
import styles from './banner.module.scss';
import translate from '../i18n/translate';

function Banner(props) {
  return (
    <div>
      <section id='banner' className='major'>
        <div className='inner'>
          <div className={styles.wrapper}>
            <header className='major'>
              <h1>My Concert Tour</h1>
            </header>
            <div className='content'>
              <p>
                {translate('create')}
                <br />
                {translate('createfor')}
              </p>
              <ul className='actions'>
                <li>
                  <Link to='/signin' className='button next scrolly'>
                    {translate('started')}
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
