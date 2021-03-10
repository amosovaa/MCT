import React, {useEffect, useState} from 'react';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import {addPictureAC, addNameAC, addImageAC, progressAC, errorFoundAC, errorMessageAC} from '../../redux/actionCreators'

function ForgottenThings(props) {
    const dispatch = useDispatch()
    const name = useSelector(state => state.pictures.name)
    const storeImage = useSelector(state => state.pictures.image)
    const store = useSelector(state => state.pictures)
    const progress = useSelector(state => state.pictures.progressPercent)
    const errorFound = useSelector(state => state.pictures.errorFound)
    const errorMessage = useSelector(state => state.pictures.errorMessage)
  
    // const [progressPercent, setProgressPercent] = useState(0);
  
    // const [error, setError] = useState({
    //   found: false,
    //   message: "",
    // });
  
    const upload = ({ target: { files } }) => {
      let data = new FormData();
      data.append('categoryImage', files[0]);
      data.append('name', files[0] && files[0].name);
      dispatch(addPictureAC(data))
    };
  
    function handleSubmit(event) {
      event.preventDefault();
      dispatch(addNameAC(name))
      dispatch(addImageAC(storeImage))
      dispatch(progressAC(0))
      // setProgressPercent(0);
      const options = {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          console.log(`${loaded}kb of ${total}kb | ${percent}%`);
          dispatch(progressAC(percent))
          // setProgressPercent(percent);
        },
      };
  
      axios
        .post("http://localhost:4000/api/category", store.formData, options)
        .then((res) => {
          setTimeout(() => {
            dispatch(addNameAC(res.data.category))
            dispatch(addImageAC(res.data.category))
            dispatch(progressAC(0))
            // setProgressPercent(0);
          }, 1000);
        })
        .catch((err) => {
          console.log(err.response);
          // setError({
          //   found: true,
          //   message: err.response.data.errors,
          // });
          dispatch(errorFoundAC(true))
          dispatch(errorMessageAC(err.response.data.errors))
  
          setTimeout(() => {
            // setError({
            //   found: false,
            //   message: "",
            // });
            dispatch(errorFoundAC(false))
            dispatch(errorMessageAC(''))
            dispatch(progressAC(0))
            // setProgressPercent(0);
          }, 3000);
        });

      }

      const [photo, setPhoto] = useState([])
      useEffect(() => {
        // axios 
        // .get('http://localhost:3000/api/category')
        // .then(response => console.log(response))
        fetch('http://localhost:4000/api/category')
          .then(response => response.json())
          .then(data => setPhoto(data))
          // .then(data => console.log(data.uploadFiles))
      })
      
    return (
      <div
        style={{ width: "100%", height: "100%" }}
        className="d-flex justify-content-center align-items-center flex-column"
      >
        {/* {error.found && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ width: "359px"}}
          >
            {error.message}
          </div>
        )} */}
        {errorFound && (
          <div
            className="alert alert-danger"
            role="alert"
            style={{ width: "359px"}}
          >
            {errorMessage}
            {/* {data.errors} */}
          </div>
        )}
  
        <form onSubmit={handleSubmit} style={{ width: "359px" ,  marginTop: '75px' }}>
          <div className="progress mb-3 w-100">
            <div
              className="progress-bar"
              role="progressbar"
              // style={{ width: `${progressPercent}%` }}
              // aria-valuenow={progressPercent}
              style={{ width: `${progress}%` }}
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* {progressPercent} */}
              {progress}
            </div>
          </div>
          <div className="custom-file mb-3">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile04"
              aria-describedby="inputGroupFileAddon04"
              onChange={upload}
            />
            {/* <label className="custom-file-label" htmlFor="inputGroupFile04">
              Choose file
            </label> */}
          </div>
          <button type="submit" className="btn btn-primary w-100" style={{marginTop: '20px'}}>
            Submit
          </button>
        </form>
        <img
          className="mt-3"
          src={`http://localhost:3000/${storeImage && storeImage.image}`}
          alt={`${name && name.name}`}
          style={{ width: "359px" }}
        />
        {photo.uploadFiles && photo.uploadFiles.map(el => <div><img src={el.image} style={{ display: 'flex', flexWrap: 'wrap',width: '200px', height: '200px'}}></img><button>Delete</button></div>)}
      </div>
    );
}

export default ForgottenThings;