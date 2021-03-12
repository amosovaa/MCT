import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { COORD_BUS } from "../../redux/actionTypes";

function Compass(props) {

  const dispatch = useDispatch();


  return (
      <button onClick={()=>{
        navigator.geolocation.getCurrentPosition((position) =>{
          dispatch({type:COORD_BUS, payload: {lat:position.coords.latitude, lng: position.coords.longitude} })
        }, ()=> null)
      }}>
        <img src="compass.svg" alt="locate me" style={{width:"64px", height:'64px'}}></img>
      </button>
  );
}

export default Compass;
