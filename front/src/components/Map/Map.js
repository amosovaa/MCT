import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
} from "@react-google-maps/api";
import { useSelector } from "react-redux";

const containerStyle = {
  width: "400px",
  height: "400px",
  borderRadius: "3px",
};

function Map({ props }) {
  const coard = useSelector((store) => store.cities.defaultCity);
  console.log(coard);
  // const center = {
  //   lat: null ? 20 : coard.latitude,
  //   lng: null ? 20 : coard.longitude
  // };
  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWnA7aqKKpfCx4s2fIkuksLdkqu9jDORA",
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      // center={center}
      zoom={13}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>

      {/* <Marker position={center} /> */}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(Map);
