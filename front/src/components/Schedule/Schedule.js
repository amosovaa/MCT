import React, { useEffect } from 'react';

function Schedule(props) {
  return (
    <div>
      <br />
      <br />
      <br />
      <h3> Выберите город </h3>
      <div class='col-12'>
        <select name='demo-category' id='demo-category'>
          <option value=''>- City -</option>
          <option value='1'> Moscow </option>
          <option value='1'> Saint-Petersburg </option>
          <option value='1'> Omsk </option>
          <option value='1'> Ufa </option>
        </select>
      </div>
      <h2>Moscow</h2>
      <div class='box'>
        <h3> Отель </h3>
        <p>Название отеля</p>
        <p>Время и дата заезда:</p>
        <p>Время и дата выезда:</p>
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
