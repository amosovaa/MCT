import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { fetchAdminFormAC } from '../../redux/thunkAC';
import styles from './adminCabinet.module.scss';
import translate from '../i18n/translate';

function AdminCabinet(props) {
  const history = useHistory();
  const dispatch = useDispatch();

  const handlerCityForm = (event) => {
    event.preventDefault();
    const {
      cityName: { value: cityName },
    } = event.target;
    const {
      hotelName: { value: hotelName },
    } = event.target;
    const {
      dateIn: { value: dateIn },
    } = event.target;
    const {
      timeIn: { value: timeIn },
    } = event.target;
    const {
      dateOut: { value: dateOut },
    } = event.target;
    const {
      timeOut: { value: timeOut },
    } = event.target;
    const {
      hotelAddress: { value: hotelAddress },
    } = event.target;
    const {
      hallAddress: { value: hallAddress },
    } = event.target;
    const {
      timeRepetition: { value: timeRepetition },
    } = event.target;
    const {
      timeRepetitionEnd: { value: timeRepetitionEnd },
    } = event.target;
    const {
      timeConcert: { value: timeConcert },
    } = event.target;
    const {
      timeConcertSecond: { value: timeConcertSecond },
    } = event.target;
    const {
      lunchAddress: { value: lunchAddress },
    } = event.target;
    const {
      timeLunch: { value: timeLunch },
    } = event.target;
    dispatch(
      fetchAdminFormAC(
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
        timeLunch
      )
    );
    event.target.cityName.value = '';
    event.target.hotelName.value = '';
    event.target.dateIn.value = '';
    event.target.timeIn.value = '';
    event.target.dateOut.value = '';
    event.target.timeOut.value = '';
    event.target.hotelAddress.value = '';
    event.target.hallAddress.value = '';
    event.target.timeRepetition.value = '';
    event.target.timeRepetitionEnd.value = '';
    event.target.timeConcert.value = '';
    event.target.timeConcertSecond.value = '';
    event.target.lunchAddress.value = '';
    event.target.timeLunch.value = '';
    history.push('/cabinet');
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handlerCityForm}>
        <br />
        <br />
        <br />
        <h2> {translate('createCity')} </h2>
        <fieldset className={styles.fieldset}>
          <label htmlFor='cityName'>
            {translate('cityname')}
            <input
              className={styles.input}
              type='text'
              placeholder='Город'
              name='cityName'
            />
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor='hotelName'>
            {translate('hotel')}
            <input
              className={styles.input}
              type='text'
              placeholder='Название отеля'
              name='hotelName'
            />
          </label>
          <label htmlFor='dateIn'>
            {translate('dateIn')}
            <input
              className={styles.date}
              type='date'
              placeholder='Дата приезда'
              name='dateIn'
            />
          </label>
          <label htmlFor='timeIn'>
            {translate('timeIn')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время приезда'
              name='timeIn'
            />
          </label>
          <label htmlFor='dateOut'>
            {translate('dateOut')}
            <input
              className={styles.date}
              type='date'
              placeholder='Дата выезда'
              name='dateOut'
            />
          </label>
          <label htmlFor='timeOut'>
            {translate('timeOut')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время выезда'
              name='timeOut'
            />
          </label>
          <label htmlFor='hotelAddress'>
            {translate('hallAddress')}
            <input
              className={styles.input}
              type='text'
              placeholder='Адрес отеля'
              name='hotelAddress'
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor='hallAddress'>
            {translate('hallAddress')}
            <input
              className={styles.input}
              type='text'
              placeholder='Адрес концертного зала'
              name='hallAddress'
            />
          </label>
          <label htmlFor='timeRepetition'>
            {translate('rehearsal')} &nbsp;
            {translate('from')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время начала репетиции'
              name='timeRepetition'
            />
          </label>
          <label htmlFor='timeRepetitionEnd'>
            {translate('rehearsal')} &nbsp;
            {translate('to')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время конца репетиции'
              name='timeRepetitionEnd'
            />
          </label>
          <label htmlFor='timeConcert'>
            {translate('firstConcert')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время начала первого концерта'
              name='timeConcert'
            />
          </label>
          <label htmlFor='timeConcertSecond'>
            {translate('secondConcert')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время начала второго концерта'
              name='timeConcertSecond'
            />
          </label>
        </fieldset>
        <fieldset className={styles.fieldset}>
          <label htmlFor='lunchAddress'>
            {translate('address')}
            <input
              className={styles.input}
              type='text'
              placeholder='Адрес еды'
              name='lunchAddress'
            />
          </label>
          <label htmlFor='timeLunch'>
            {translate('lunchTime')}
            <input
              className={styles.date}
              type='time'
              placeholder='Время еды'
              name='timeLunch'
            />
          </label>
        </fieldset>
        <button>{translate('createSchedule')} </button>
      </form>
    </div>
  );
}

export default AdminCabinet;
