import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_CITIES } from '../../redux/actionTypes';
import { setDefaultCityAC } from '../../redux/actionCreators';
import { fetchDelete } from '../../redux/thunkAC';
import { useHistory } from 'react-router-dom';
import Map from '../Map/Map';

function Schedule(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const defaultCity = useSelector((state) => state.cities.defaultCity);
  const cities = useSelector((state) => state.cities.cities);
  const handlerDelete = (e) => {
    e.preventDefault();
    const { id } = e.target;
    history.push('/cabinet');
    dispatch(fetchDelete(id));
  };
  useEffect(() => {
    fetch('/cities')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: INIT_CITIES, payload: data });
      });
  }, [dispatch]);
  console.log(cities)

  const selectHandler = (event) => {
    dispatch(setDefaultCityAC(event.target.value));
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <h3> Выберите город </h3>
      <div className='col-12'>
        <select
          name='demo-category'
          id='demo-category'
          onChange={selectHandler}
        >
          {cities.map((el) => (
            <option key={el._id} value={el._id}>
              {el.name}
            </option>
          ))}
        </select>
      </div>
      <h2>{defaultCity && defaultCity.name}</h2>
      <div className='box'>
        <h3> Отель </h3>
        <p>Название отеля: {defaultCity && defaultCity.hotel.name}</p>
        <p>
          Время и дата заезда:{' '}
          {defaultCity && new Date(defaultCity.dateIn).toLocaleString()}
        </p>
        <p>
          Время и дата выезда:{' '}
          {defaultCity && new Date(defaultCity.dateOut).toLocaleString()}
        </p>
        <p>
          Адрес: {defaultCity && defaultCity.hotel.address}
          {/* {defaultCity && defaultCity.longitude} */}
        </p>
        <p> Уточнения </p>
        <Map />
      </div>

      <div className='box'>
        <h3> Концертный зал </h3>
        <p>
          Время первого концерта:{' '}
          {defaultCity &&
            new Date(defaultCity.hall.timeConcert).toLocaleString()}
        </p>
        <p>Время второго концерта:</p>
        <p>
          Репетиция с{' '}
          {defaultCity &&
            new Date(defaultCity.hall.timeRepetition).toLocaleString()}{' '}
          до
          {defaultCity &&
            new Date(defaultCity.hall.timeRepetitionEnd).toLocaleString()}
        </p>
        <p> Адрес: {defaultCity && defaultCity.hall.name}</p>
        <p> Уточнения </p>
      </div>
      <div className='box'>
        <h3> Еда </h3>
        <div className='box'>
          <h4> Завтрак </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <div className='box'>
          <h4> Обед </h4>
          <p>
            Время с{' '}
            {defaultCity && new Date(defaultCity.lunch.time).toLocaleString()}{' '}
            до ...
          </p>
          <p> Адрес: </p>
        </div>
        <div className='box'>
          <h4> Ужин </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <p> Уточнения </p>
      </div>
      {defaultCity && (
        <button
          type='button'
          onClick={handlerDelete}
          id={defaultCity && defaultCity._id}
        >
          delete
        </button>
      )}
    </div>
  );
}

export default Schedule;
