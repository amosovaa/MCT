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
      <Link to='/cabinets/schedule'>Общее расписание</Link>
      <br />
      <Link to='/cabinets/admincabinet'>Админская штука</Link>
    </div>
  );
}

export default Cabinet;
