import fetch from "node-fetch";
import urlencode from "urlencode";
import City from '../models/City.js'
import Tour from '../models/Tour.js'

export const citiAdd_post = async (req, res) => {
  const { name, dateIn, dateOut, timeOut, hotel, lunch } = req.body;

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(name)}&results=1`
  );
  const resp = await response.json();
  const location =resp.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitude = location.split(" ")[0]; //долгота
  const latitude = location.split(" ")[1]; //широта
  
  const city = new City({
    name,
    dateIn,
    dateOut,
    timeOut,
    longitude,
    latitude,
    hotel,
    lunch
  })
  console.log(city)

  res.status(200).json({ success: true });
};
