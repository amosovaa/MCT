import fetch from "node-fetch";
import urlencode from "urlencode";
import City from "../models/City.js";
import Tour from "../models/Tour.js";
import Hotel from "../models/Hotel.js";
import Lunch from "../models/Lunch.js";
import Hall from "../models/Hall.js";
import Dinner from '../models/Dinner.js'
import Breakfast from '../models/Breakfast.js'

export const citiAdd_get = async (req, res) => {
  const citles = await City.find({})
    .populate("hotel")
    .populate("lunch")
    .populate("breakfast")
    .populate("dinner")
    .populate("hall")
  res.json(citles);
};

export const citi_delete = async (req, res) => {
  const { id } = req.params;
  const city = await City.findByIdAndDelete(id);
  res.json(city.id);
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
    timeBreakfast,
    timeDinner,
    dinnerAddress,
    breakfastAddress
  } = req.body;

  const response = await fetch(
    `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
      cityName
    )}&results=1`
  );
  const resp = await response.json();

  if (
    resp.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData
      .found == 0
  ) {
    res.json({ error: "Что-то пошло не так" });
  } else {
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

    if (
      respHotel.response.GeoObjectCollection.metaDataProperty
        .GeocoderResponseMetaData.found == 0
    ) {
      res.json({ error: "Что-то пошло не так" });
    } else {
      const locationHotel =
        respHotel.response.GeoObjectCollection.featureMember[0].GeoObject.Point
          .pos;
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
      if (
        respHall.response.GeoObjectCollection.metaDataProperty
          .GeocoderResponseMetaData.found == 0
      ) {
        res.json({ error: "Что-то пошло не так" });
      } else {
        const locationHall =
          respHall.response.GeoObjectCollection.featureMember[0].GeoObject.Point
            .pos;
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
        //______________________________________________________________________________________________

        const responseBreakfast = await fetch(
          `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
            breakfastAddress
          )}&results=1`
        );
        const respBreakfast = await responseBreakfast.json();

        const responseDinner = await fetch(
          `https://geocode-maps.yandex.ru/1.x/?apikey=c3411918-5071-411a-bf06-4a1ae2d170ab&format=json&geocode=${urlencode(
            dinnerAddress
          )}&results=1`
        );
        const respDinner = await responseDinner.json();

        if (
          respLunch.response.GeoObjectCollection.metaDataProperty
            .GeocoderResponseMetaData.found == 0 ||
          respBreakfast.response.GeoObjectCollection.metaDataProperty
            .GeocoderResponseMetaData.found == 0 ||
          respDinner.response.GeoObjectCollection.metaDataProperty
            .GeocoderResponseMetaData.found == 0
        ) {
          res.json({ error: "Что-то пошло не так" });
        } else {
          // LUNCH
          const locationLunch =
            respLunch.response.GeoObjectCollection.featureMember[0].GeoObject
              .Point.pos;
          const longitudeLunch = locationLunch.split(" ")[0]; //долгота
          const latitudeLunch = locationLunch.split(" ")[1]; //широта

          const addressLunch =
            respLunch.response.GeoObjectCollection.featureMember[0].GeoObject
              .metaDataProperty.GeocoderMetaData.text;

          //BREAKFAST
          const locationBreakfast =
            respBreakfast.response.GeoObjectCollection.featureMember[0]
              .GeoObject.Point.pos;
          const longitudeBreakfast = locationBreakfast.split(" ")[0]; //долгота
          const latitudeBreakfast = locationBreakfast.split(" ")[1]; //широта

          const addressBreakfast =
            respBreakfast.response.GeoObjectCollection.featureMember[0]
              .GeoObject.metaDataProperty.GeocoderMetaData.text;

          //DINNER
          const locationDinner =
            respDinner.response.GeoObjectCollection.featureMember[0].GeoObject
              .Point.pos;
          const longitudeDinner = locationDinner.split(" ")[0]; //долгота
          const latitudeDinner = locationDinner.split(" ")[1]; //широта

          const addressDinner =
            respDinner.response.GeoObjectCollection.featureMember[0].GeoObject
              .metaDataProperty.GeocoderMetaData.text;

          // TIMING________________________________________

          const dateTimeIn = dateIn + " " + timeIn;
          const dateTimeOut = dateOut + " " + timeOut;

          const timeLunchDate = dateIn + " " + timeLunch;

          const timeBreakfastDate = dateIn + " " + timeBreakfast

          const timeDinnerDate = dateIn + " " + timeDinner

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

          await hall.save();

          const hotel = new Hotel({
            name: hotelName,
            time: timeLunchDate,
            longitude: longitudeHotel,
            latitude: latitudeHotel,
            address: addressHotel,
          });

          await hotel.save();

          const lunch = new Lunch({
            address: addressLunch,
            time: timeLunchDate,
            longitude: longitudeLunch,
            latitude: latitudeLunch,

          });
          
          await lunch.save();

          const dinner = new Dinner({
            address: addressDinner,
            time: timeDinnerDate, //
            longitude: longitudeDinner,
            latitude: latitudeDinner,

          });

          await dinner.save()

          const breakfast = new Breakfast({
            address: addressBreakfast,
            time: timeBreakfastDate, 
            longitude: longitudeBreakfast,
            latitude: latitudeBreakfast,

          });

          await breakfast.save()

          const city = new City({
            name: addressCity,
            dateIn: dateTimeIn,
            dateOut: dateTimeOut,
            longitude: longitudeCity,
            latitude: latitudeCity,
            hotel: hotel,
            lunch: lunch,
            breakfast: breakfast,
            dinner: dinner,
            hall: hall,
          });

          await city.save();

          res.status(200).json({ success: true, city });
        }
      }
    }
  }
};
