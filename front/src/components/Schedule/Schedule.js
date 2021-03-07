import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_CITIES } from '../../redux/actionTypes';

function Schedule(props) {
  const dispatch = useDispatch();
  const defaultCity = useSelector((state) => state.cities.cities[0]);
  const arrCity = useSelector((state) => state.cities.cities);

  useEffect(() => {
    fetch('/cities')
      .then((response) => response.json())
      .then((data) => dispatch({ type: INIT_CITIES, payload: data }));
  }, [dispatch]);

  // const [city, setCity] = useState({});
  // console.log(defaultCity);
  // console.log(city);
  return (
    <div>
      <br />
      <br />
      <br />
      <h3> Выберите город </h3>
      <div class='col-12'>
        <select name='demo-category' id='demo-category'>
          {arrCity.map((el) => (
            <option value=''>{el.name}</option>
          ))}
        </select>
      </div>
      <h2>{defaultCity && defaultCity.name}</h2>
      <div class='box'>
        <h3> Отель </h3>
        <p>Название отеля</p>
        <p>Время и дата заезда: {defaultCity && defaultCity.dateIn}</p>
        <p>Время и дата выезда: {defaultCity && defaultCity.dateOut}</p>
        <p> Адрес </p>
        <p> Уточнения </p>
      </div>
      <div class='box'>
        <h3> Концертный зал </h3>
        <p>Время первого концерта:</p>
        <p>Время второго концерта:</p>
        <p> Репетиция с ... до ... </p>
        <p> Адрес: </p>
        <p> Уточнения </p>
      </div>
      <div class='box'>
        <h3> Еда </h3>
        <div class='box'>
          <h4> Завтрак </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <div class='box'>
          <h4> Обед </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <div class='box'>
          <h4> Ужин </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <p> Уточнения </p>
      </div>
    </div>
  );
}

export default Schedule;
