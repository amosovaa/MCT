import React from 'react';
import translate from '../i18n/translate';

function Section(props) {
  return (
    <div>
      <section id='one' className='tiles'>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>{translate('hotel')}</h3>
            <p>{translate('hotelInfo')}</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>{translate('bus')}</h3>
            <p>{translate('busInfo')}</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>{translate('schedule')}</h3>
            <p>{translate('scheduleInfo')}</p>
          </header>
        </article>
        <article>
          <span className='image'></span>
          <header className='major'>
            <h3>{translate('restaurants')}</h3>
            <p>{translate('restaurantsInfo')}</p>
          </header>
        </article>
        <article style={{ width: '100%' }}>
          <span className='image'></span>
          <header
            className='major'
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '0 auto',
            }}
          >
            <h3>{translate('things')}</h3>
            <p>{translate('thingsInfo')}</p>
          </header>
        </article>
      </section>
    </div>
  );
}

export default Section;
