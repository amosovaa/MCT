import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_CITIES } from '../../redux/actionTypes';
import { setDefaultCityAC } from '../../redux/actionCreators';
import { fetchDelete } from '../../redux/thunkAC';
import { cardAC } from '../../redux/actionCreators';
import { useHistory } from 'react-router-dom';
import Map from '../Map/Map';
import styles from './schedule.module.scss';

function Schedule(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const defaultCity = useSelector((state) => state.cities.defaultCity);
  const cities = useSelector((state) => state.cities.cities);
  const card = useSelector((state) => state.state);
  console.log(card);
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

  const selectHandler = (event) => {
    dispatch(setDefaultCityAC(event.target.value));
  };
  const handlerMap = (e) => {
    e.preventDefault();
    card.card = !card.card;
    dispatch(cardAC());
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <div className={styles.wrapper}>
        <h3> Выберите город </h3>
        <div className="col-12">
          <select
            name="demo-category"
            id="demo-category"
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
      </div>
      <div className="box">
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
        <div className={styles.card}>
          <button onClick={handlerMap}>Показать на карте</button>
          {card.card && <Map defaultCity={defaultCity && defaultCity.hotel} />}
        </div>
      </div>

      <div className="box">
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
        <Map defaultCity={defaultCity && defaultCity.hall} />
      </div>
      <div className="box">
        <h3> Еда </h3>
        <div className="box">
          <h4> Завтрак </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <div className="box">
          <h4> Обед </h4>
          <p>
            Время с{' '}
            {defaultCity && new Date(defaultCity.lunch.time).toLocaleString()}{' '}
            до ...
          </p>
          <p> Адрес: </p>
        </div>
        <div className="box">
          <h4> Ужин </h4>
          <p>Время с ... до ...</p>
          <p> Адрес: </p>
        </div>
        <p> Уточнения </p>
        <Map defaultCity={defaultCity && defaultCity.lunch} />
      </div>
      <div className={styles.wrapperBtn}>
        {defaultCity && (
          <button
            type="button"
            onClick={handlerDelete}
            id={defaultCity && defaultCity._id}
          >
            delete
          </button>
        )}
      </div>
    </div>
  );
}

export default Schedule;
