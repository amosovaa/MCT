import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { INIT_COORDS } from "../../redux/actionTypes";
// import image from "./bus-stop.svg";

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

  useEffect(() => {
    fetch("/location")
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_COORDS, payload: data }));
  }, [dispatch]);

  const center = {
    lat: bus && bus.latitude,
    lng: bus && bus.longitude,
  };

  // const [map, setMap] = React.useState(null);

  // const [selected, setSelected] = React.useState(false)

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWnA7aqKKpfCx4s2fIkuksLdkqu9jDORA",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <GoogleMap
      zoom={15}
      mapContainerStyle={containerStyle}
      center={center}
      options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      <></>
      <Marker
        position={center}
        icon={{
          url: "./bus-stop.svg",
          scaledSize: new window.google.maps.Size(60,60)
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
