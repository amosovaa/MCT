import fetch from "node-fetch";
import urlencode from "urlencode";
import City from "../models/City.js";
import Tour from "../models/Tour.js";
import Hotel from '../models/Hotel.js';
import Lunch from '../models/Lunch.js';
import Hall from '../models/Hall.js';

export const citiAdd_post = async (req, res) => {
  const { name, dateIn, dateOut, timeOut, hotel } = req.body;

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      name
    )}&results=1`
  );
  const resp = await response.json();
  const location =
    resp.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitudeCity = location.split(" ")[0]; //долгота
  const latitudeCity = location.split(" ")[1]; //широта

  const addressCity =
    resp.response.GeoObjectCollection.featureMember[0].GeoObject
      .metaDataProperty.GeocoderMetaData.text;

      
      const Hotel = new Hotel({
        name: "name",
        time: "time",
        longitudeHotel,
        latitudeHotel,
        adressHotel,
      });

      const lunch = new Lunch({
        name: addressLunch,
        time:'time',
        longitudeLunch,
        latitudeLunch,
      })
      
      const city = new City({
        name: addressCity,
        dateIn,
        dateOut,
        timeOut,
        longitudeCity,
        latitudeCity,
        hotel,
        lunch,
      });

      

  // console.log(city);
  // console.log(city.dateIn.toLocaleTimeString(), city.dateIn);

  res.status(200).json({ success: true });
};
