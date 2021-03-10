import React from 'react';
import { Link } from 'react-router-dom';
import styles from './cabinet.module.scss';
import translate from '../i18n/translate';

function Cabinet(props) {
  return (
    <div className={styles.wrapper}>
      <Link to='/cabinets/schedule'>
        <section id='one' className='tiles'>
          <article style={{ cursor: 'pointer' }}>
            <span className='image'></span>
            <header className='major'>
              <h3>{translate('schedule')}</h3>
              <p>{translate('exploreSchedule')}</p>
            </header>
          </article>
        </section>
      </Link>
      <br />
      <Link to='/cabinets/admincabinet'>
        <section id='one' className='tiles'>
          <article style={{ backgroundColor: 'green', cursor: 'pointer' }}>
            <span className='image'></span>
            <header className='major'>
              <h3>{translate('createSchedule')}</h3>
              <p>{translate('createScheduleInfo')}</p>
            </header>
          </article>
        </section>
      </Link>
    </div>
  );
}

export default Cabinet;
