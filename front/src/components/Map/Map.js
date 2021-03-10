import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  useLoadScript,
  Marker,
  InfoWindow
} from "@react-google-maps/api";

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
  // const coard = useSelector((store) => store.cities.defaultCity);
  // console.log(coard);
  const center = {
    lat: defaultCity && defaultCity.latitude,
    lng: defaultCity && defaultCity.longitude,
  };

  
  const getLocation = () =>{
    const pos = {};
    const geolocation = navigator.geolocation;
    if (geolocation) {
       geolocation.getCurrentPosition(findLocal, showEror);
    }
    function findLocal(position){
       pos.lat = position.coords.latitude;
       pos.lng = position.coords.longitude;
      //  console.log(pos)
    }
    function showEror(){console.log(Error)}
    return pos;
 };
// const pos = getLocation().then(data=>console.log(data))
// pos.then(data=>console.log(data))
// console.log(pos.lat, pos.lng)


// console.log(navigator.geolocation.getCurrentPosition((position)=>{
//   console.log(position.coords.latitude)
//   pos.lat = position.coords.latitude
//   pos.lng = position.coords.longitude
// }))



  // const [map, setMap] = React.useState(null);

  const [selected, setSelected] = React.useState(false)

  // const onLoad = React.useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, [defaultCity]);

  // const onUnmount = React.useCallback(function callback(map) {
  //   setMap(null);
  // }, [defaultCity]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDWnA7aqKKpfCx4s2fIkuksLdkqu9jDORA",
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return isLoaded ? (
    <GoogleMap
      zoom={defaultCity && 17}
      mapContainerStyle={containerStyle}
      center={center}
      options={options}
      // onLoad={onLoad}
      // onUnmount={onUnmount}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <></>

      {/* <Marker position={pos}/> */}

      <Marker position={center} onClick={()=>{
        setSelected(!selected)
      }}/>
      { selected && defaultCity.name ? (<InfoWindow position={center}>
        <div style={{color:"black"}}>
        <p>{!defaultCity.address && 'Концертный зал:'}</p> 
        <p>{defaultCity.name && defaultCity.name}</p> 
        <p>{defaultCity.address && defaultCity.address}</p> 
        </div>
      </InfoWindow>)  : null
      }
    </GoogleMap>
    
  ) : (
    <></>
  );
}

export default React.memo(Map);
