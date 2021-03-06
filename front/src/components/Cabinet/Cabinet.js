import React from 'react';
import Schedule from '../Schedule/Schedule';
import AdminCabinet from '../AdminCabinet/AdminCabinet';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

function Cabinet(props) {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Link to='/cabinets/schedule'>
        <section id='one' className='tiles'>
          <article style={{ cursor: 'pointer' }}>
            <span className='image'></span>
            <header className='major'>
              <h3>Расписание</h3>
              <p>Узнать расписание на день</p>
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
              <h3>Создать расписание</h3>
              <p>Создать расписание для нового города</p>
            </header>
          </article>
        </section>
      </Link>
    </div>
  );
}

export default Cabinet;
