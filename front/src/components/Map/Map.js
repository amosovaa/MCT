import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Compass from "../Compass/Compass";

const containerStyle = {
  width: "70vw",
  height: "70vh",
  borderRadius: "4px",
};
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  streetViewControl: true,
  navigation: true,
  fullscreenControl: true,
};

function Map({ defaultCity }) {
  const center = {
    lat: defaultCity && defaultCity.latitude,
    lng: defaultCity && defaultCity.longitude,
  };

  const coords = useSelector((store) => store.state.coords);

  const [selected, setSelected] = React.useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWnA7aqKKpfCx4s2fIkuksLdkqu9jDORA",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <>
      <GoogleMap
        zoom={defaultCity && 17}
        mapContainerStyle={containerStyle}
        center={center}
        options={options}
      >
        <Marker position={coords.lat && coords} />
        <Marker
          position={center}
          onClick={() => {
            setSelected(!selected);
          }}
        />
        {selected && defaultCity.name ? (
          <InfoWindow position={center}>
            <div style={{ color: "black" }}>
              <p>{!defaultCity.address && "Концертный зал:"}</p>
              <p>{defaultCity.name && defaultCity.name}</p>
              <p>{defaultCity.address && defaultCity.address}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
      <Compass />
    </>
  ) : (
    <></>
  );
}

export default React.memo(Map);
