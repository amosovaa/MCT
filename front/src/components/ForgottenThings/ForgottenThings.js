import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import styles from './forgottenThings.module.scss';
import {
  addPictureAC,
  addNameAC,
  addImageAC,
  progressAC,
  errorFoundAC,
  errorMessageAC,
  initPhotosAC,
  deletePhotosAC,
} from '../../redux/actionCreators';
import translate from '../i18n/translate';

function ForgottenThings(props) {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.pictures.name);
  const storeImage = useSelector((state) => state.pictures.image);
  const store = useSelector((state) => state.pictures);
  const progress = useSelector((state) => state.pictures.progressPercent);
  const errorFound = useSelector((state) => state.pictures.errorFound);
  const errorMessage = useSelector((state) => state.pictures.errorMessage);
  const initPicture = useSelector((state) => state.pictures.photos);
  console.log(initPicture);

  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('categoryImage', files[0]);
    data.append('name', files[0] && files[0].name);
    dispatch(addPictureAC(data));
  };

  function handleSubmit(event) {
    event.preventDefault();
    // dispatch(addNameAC(name))
    // dispatch(addImageAC(storeImage))
    dispatch(progressAC(0));
    const options = {
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded}kb of ${total}kb | ${percent}%`);
        dispatch(progressAC(percent));
      },
    };

    axios
      .post('/api/category', store.formData, options)
      .then((res) => {
        // dispatch(addNameAC(res.data.category))
        dispatch(addImageAC(res.data.category));
        dispatch(progressAC(0));
      })
      .catch((err) => {
        dispatch(errorFoundAC(true));
        dispatch(errorMessageAC(err.response.data.errors));

        setTimeout(() => {
          dispatch(errorFoundAC(false));
          dispatch(errorMessageAC(''));
          dispatch(progressAC(0));
        }, 3000);
      });
  }

  useEffect(() => {
    fetch('/api/category')
      .then((response) => response.json())
      .then((data) => dispatch(initPhotosAC(data)));
  }, [dispatch]);

  function buttonHandler(event) {
    event.preventDefault();
    let buttonId = event.target.parentElement.id;
    fetch(`/api/category/${buttonId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    dispatch(deletePhotosAC(buttonId));
  }

  return (
    <div
      style={{ width: '100%', height: '100%' }}
      className='d-flex justify-content-center align-items-center flex-column'
    >
      {errorFound && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '359px' }}
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.customFile}>
          <input
            type='file'
            className={styles.customFile}
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
        </div>
        <button type='submit' className={styles.btnPrimary}>
          {translate('submit')}
        </button>
      </form>
      <div className={styles.mainImgDiv}>
        {initPicture &&
          initPicture.uploadFiles.map((el) => (
            <div key={el._id}>
              {' '}
              <div id={el._id} className={styles.imgDiv}>
                <img
                  src={el.image}
                  key={el._id}
                  className={styles.thingPicture}
                ></img>
                <button onClick={buttonHandler} className={styles.deleteButton}>
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default ForgottenThings;
