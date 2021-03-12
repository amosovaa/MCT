import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { INIT_CITIES } from '../../redux/actionTypes';
import { setDefaultCityAC } from '../../redux/actionCreators';
import { fetchDelete } from '../../redux/thunkAC';
import { useHistory } from 'react-router-dom';
import Map from '../Map/Map';
import styles from './schedule.module.scss';
import Modal from 'react-modal';
import translate from '../i18n/translate';

const customStyles = {
  overlay: {
    backgroundColor: '#2a2f4a',
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('*');

function Schedule(props) {
  // modal
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const defaultCity = useSelector((state) => state.cities.defaultCity);
  const cities = useSelector((state) => state.cities.cities);
  console.log(defaultCity)

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
  return (
    <div>
      <br />
      <br />
      <br />
      <div className={styles.wrapper}>
        <h3> {translate('city')} </h3>
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
      </div>
      <div className='box'>
        <h3> {translate('hotel')} </h3>
        <p>
          {translate('hotelName')} {defaultCity && defaultCity.hotel.name}
        </p>
        <p>
          {translate('checkinTime')}{' '}
          {defaultCity && new Date(defaultCity.dateIn).toLocaleString()}
        </p>
        <p>
          {translate('checkoutTime')}{' '}
          {defaultCity && new Date(defaultCity.dateOut).toLocaleString()}
        </p>
        <p>
          {translate('address')} {defaultCity && defaultCity.hotel.address}
          {/* {defaultCity && defaultCity.longitude} */}
        </p>
        <p> {translate('moreInfo')} </p>
        <div className={styles.card}>
          <button onClick={openModal}>{translate('map')}</button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <Map
              id='map'
              className={styles.map}
              defaultCity={defaultCity && defaultCity.hotel}
            />
          </Modal>
        </div>
      </div>

      <div className='box'>
        <h3> {translate('hall')} </h3>
        <p>
          {translate('firstConcert')}
          {defaultCity &&
            new Date(defaultCity.hall.timeConcert).toLocaleString()}
        </p>
        <p>{translate('secondConcert')} </p>
        <p>
          {translate('rehearsal')} {translate('from')}
          {defaultCity &&
            new Date(defaultCity.hall.timeRepetition).toLocaleString()}{' '}
          {translate('to')}
          {defaultCity &&
            new Date(defaultCity.hall.timeRepetitionEnd).toLocaleString()}
        </p>
        <p>
          {translate('address')} {defaultCity && defaultCity.hall.name}
        </p>
        <p> {translate('moreInfo')} </p>
        <div className={styles.card}>
          <button onClick={openModal}>{translate('map')}</button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <Map
              className={styles.map}
              defaultCity={defaultCity && defaultCity.hall}
            />
          </Modal>
        </div>
      </div>
      <div className='box'>
        <h3> {translate('meal')} </h3>
        <div className='box'>
          <h4> {translate('breakfast')} </h4>
          <p>
            {translate('from')} {defaultCity &&
              new Date(defaultCity.breakfast.time).toLocaleString()} 
          </p>
          <p> {translate('address')} {defaultCity &&
              defaultCity.breakfast.address}</p>
        </div>
        <div className='box'>
          <h4> {translate('dinner')} </h4>
          <p>
            {translate('from')}
            {defaultCity &&
              new Date(defaultCity.lunch.time).toLocaleString()}{' '}
          </p>
          <p> {translate('address')} {defaultCity &&
              defaultCity.lunch.address} </p>
        </div>
        <div className='box'>
          <h4> {translate('supper')} </h4>
          <p>
            {translate('from')}
            {defaultCity &&
              new Date(defaultCity.dinner.time).toLocaleString()}
          </p>
          <p> {translate('address')}  {defaultCity &&
              defaultCity.dinner.address} </p>
        </div>
        <p> {translate('moreInfo')} </p>
        <div className={styles.card}>
          <button onClick={openModal}>{translate('map')}</button>
          <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel='Example Modal'
          >
            <Map
              className={styles.map}
              defaultCity={defaultCity && defaultCity.lunch}
            />
          </Modal>
        </div>
      </div>
      <div className={styles.wrapperBtn}>
        {defaultCity && (
          <button
            type='button'
            onClick={handlerDelete}
            id={defaultCity && defaultCity._id}
          >
            {translate('delete')}
          </button>
        )}
      </div>
    </div>
  );
}

export default Schedule;
