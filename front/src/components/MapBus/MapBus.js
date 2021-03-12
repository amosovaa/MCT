import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { INIT_COORDS } from "../../redux/actionTypes";
import Compass from "../Compass/Compass";
import styles from './mapbus.module.scss'

const containerStyle = {
  width: "80vw",
  height: "80vh",
  borderRadius: "4px",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
  navigation: true,
  fullscreenControl: true,
};

function Map(props) {
  const dispatch = useDispatch();
  const bus = useSelector((store) => store.coords.coords);
  const coords = useSelector((store) => store.state.coords);

  useEffect(() => {
    fetch("/location")
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_COORDS, payload: data }));
  }, [dispatch]);

  const center = {
    lat: bus && bus.latitude,
    lng: bus && bus.longitude,
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWnA7aqKKpfCx4s2fIkuksLdkqu9jDORA",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <div className={styles.wrapper}>
      <GoogleMap
        zoom={15}
        mapContainerStyle={containerStyle}
        center={center}
        options={options}
      >
        <Marker
          position={center}
          icon={{
            url: "./bus-stop.svg",
            scaledSize: new window.google.maps.Size(60, 60),
          }}
        />
        <Marker
          position={coords.lat && coords}
          icon={{
            url: "./location.svg",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
      <Compass />
    </div>
  ) : (
    <></>
  );
}

export default React.memo(Map);
