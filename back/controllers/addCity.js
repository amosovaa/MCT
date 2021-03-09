import fetch from "node-fetch";
import urlencode from "urlencode";
import City from "../models/City.js";
import Tour from "../models/Tour.js";
import Hotel from "../models/Hotel.js";
import Lunch from "../models/Lunch.js";
import Hall from "../models/Hall.js";

export const citiAdd_get = async (req, res) => {
  const citles = await City.find({})
    .populate("hotel")
    .populate("lunch")
    .populate("hall");
  // console.log(citles);
  res.json(citles);
};

export const citiAdd_post = async (req, res) => {
  const {
    cityName,
    hotelName,
    dateIn,
    timeIn,
    dateOut,
    timeOut,
    hotelAddress,
    hallAddress,
    timeRepetition,
    timeRepetitionEnd,
    timeConcert,
    timeConcertSecond,
    lunchAddress,
    timeLunch,
  } = req.body;

  // CITY
  // console.log(req.body);

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      cityName
    )}&results=1`
  );
  const resp = await response.json();

  if (
    resp.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData
      .found === 0
  ) {
    console.log("hi");
    res.end({ error: "Что-то пошло не так" });
    console.log("hijj");
  }

  //координаты города по res

  const location =
    resp.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitudeCity = location.split(" ")[0]; //долгота
  const latitudeCity = location.split(" ")[1]; //широта

  //адекватный адрес города>>>>>>> master
  const addressCity =
    resp.response.GeoObjectCollection.featureMember[0].GeoObject
      .metaDataProperty.GeocoderMetaData.text;

  // HOTEL________________________________________

  const responseHotel = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      hotelAddress
    )}&results=1`
  );
  const respHotel = await responseHotel.json();

  const locationHotel =
    respHotel.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitudeHotel = locationHotel.split(" ")[0]; //долгота
  const latitudeHotel = locationHotel.split(" ")[1]; //широта

  const addressHotel =
    respHotel.response.GeoObjectCollection.featureMember[0].GeoObject
      .metaDataProperty.GeocoderMetaData.text;

  // HALL________________________________________

  const responseHall = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      hallAddress
    )}&results=1`
  );
  const respHall = await responseHall.json();

  const locationHall =
    respHall.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitudeHall = locationHall.split(" ")[0]; //долгота
  const latitudeHall = locationHall.split(" ")[1]; //широта

  const addressHall =
    respHall.response.GeoObjectCollection.featureMember[0].GeoObject
      .metaDataProperty.GeocoderMetaData.text;

  // LUNCH________________________________________

  const responseLunch = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      lunchAddress
    )}&results=1`
  );
  const respLunch = await responseLunch.json();

  const locationLunch =
    respLunch.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
  const longitudeLunch = locationLunch.split(" ")[0]; //долгота
  const latitudeLunch = locationLunch.split(" ")[1]; //широта

  const addressLunch =
    respLunch.response.GeoObjectCollection.featureMember[0].GeoObject
      .metaDataProperty.GeocoderMetaData.text;

  // TIMING________________________________________

  const dateTimeIn = dateIn + " " + timeIn;
  const dateTimeOut = dateOut + " " + timeOut;

  // console.log(dateTimeIn);

  const timeLunchDate = dateIn + " " + timeLunch;

  const timeRepetitionDate = dateIn + " " + timeRepetition;
  const timeRepetitionDateEnd = dateIn + " " + timeRepetitionEnd;

  const timeConcertDate = dateIn + " " + timeConcert;
  const timeConcertSecondDate = dateIn + " " + timeConcertSecond;

  // MODELS________________________________________

  const hall = new Hall({
    name: addressHall,
    timeConcert: timeConcertDate,
    timeRepetition: timeRepetitionDate,
    timeRepetitionEnd: timeRepetitionDateEnd,
    longitude: longitudeHall,
    latitude: latitudeHall,
  });

  // await hall.save();

  const hotel = new Hotel({
    name: hotelName,
    time: timeLunchDate,
    longitude: longitudeHotel,
    latitude: latitudeHotel,
    address: addressHotel,
  });

  // await hotel.save();

  const lunch = new Lunch({
    name: addressLunch,
    time: timeLunchDate,
    longitude: longitudeLunch,
    latitude: latitudeLunch,
  });

  // await lunch.save();

  const city = new City({
    name: addressCity,
    dateIn: dateTimeIn,
    dateOut: dateTimeOut,
    longitude: longitudeCity,
    latitude: latitudeCity,
    hotel: hotel,
    lunch: lunch,
    hall: hall,
  });

  // await city.save();
  console.log(city);

  // console.log(city.dateIn.toLocaleTimeString(), city.dateIn);

  res.status(200).json({ success: true, city });
};
