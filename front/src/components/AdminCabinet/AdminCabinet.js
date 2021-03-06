import React, { useState } from 'react';

function AdminCabinet(props) {

  return (
    <div>
      <form>
        <br />
        <br />
        <br />
        <h2> Создать новый город </h2>
        <fieldset>
          <legend>Город</legend>
          <label>
            <input type='text' placeholder='Город' name='cityName' />
          </label>
        </fieldset>
        <fieldset>
          <legend>Отель</legend>
          <label>
            <input type='text' placeholder='Название отеля' name='hotelName'/>
          </label>
          <label>
            <input type='date' placeholder='Дата приезда' name='dateIn' />
          </label>
          <label>
            <input type='time' placeholder='Время приезда' name='timeIn'/>
          </label>
          <label>
            <input type='date' placeholder='Дата выезда' name='dateOut'/>
          </label>
          <label>
            <input type='time' placeholder='Время выезда' name='timeOut'/>
          </label>
          <label>
            <input type='text' placeholder='Адрес отеля' name='hotelAddress'/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Концертный зал</legend>
          <label>
            <input type='text' placeholder='Адрес концертного зала' name='hallAddress' />
          </label>
          <label>
            <input type='time' placeholder='Время начала репетиции' name='timeRepetition'/>
          </label>
          <label>
            <input type='time' placeholder='Время конца репетиции' name='timeRepetitionEnd' />
          </label>
          <label>
            <input type='time' placeholder='Время начала первого концерта' name='timeConcert' />
          </label>
          <label>
            <input type='time' placeholder='Время начала второго концерта' name='timeConcertSecond'/>
          </label>
        </fieldset>
        <fieldset>
          <legend>Еда</legend>
          <label>
            <input type='text' placeholder='Адрес еды' name='lunchAddress' />
          </label>
          <label>
            <input type='time' placeholder='Время еды' name='timeLunch'/>
          </label>
        </fieldset>
        <button> Создать город </button>
      </form>
    </div>
  );
}

export default AdminCabinet;
