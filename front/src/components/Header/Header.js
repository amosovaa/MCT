import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { navAC } from '../../redux/actionCreators';
function Header(props) {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.state);
  console.log(store);
  const handlerNav = (e) => {
    e.preventDefault();
    store.nav = !store.nav;
    dispatch(navAC(store.nav));
  };
  return (
    <header id="header">
      <nav>
        <Link onClick={handlerNav} to="/">
          menu
        </Link>
      </nav>
    </header>
  );
}

export default Header;
