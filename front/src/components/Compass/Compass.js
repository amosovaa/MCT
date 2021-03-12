import React from "react";
import { useDispatch } from 'react-redux';
import { COORD_BUS } from "../../redux/actionTypes";
import styles from './compass.module.scss'
function Compass(props) {

  const dispatch = useDispatch();


  return (
      <span className={styles.wrapper} onClick={()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
          dispatch({type:COORD_BUS, payload: {lat:position.coords.latitude, lng: position.coords.longitude} })
        }, ()=> null)
      }}>
        <img src="/compass.svg" alt="locate me" style={{width:"48px", height:'48px'}}></img>
      </span>
  );
}

export default Compass;
