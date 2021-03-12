import {ADD_PICTURE, ADD_IMAGE, CHANGE_PROGRESS, ERROR_FOUND, ERROR_MESSAGE, INIT_PHOTOS, DELETE_PHOTOS} from '../actionTypes'

let initialState = {
    formData: {},
    // name: '',
    image: '',
    progressPercent: 0,
    errorFound: false,
    errorMessage: '',
    // photos: []
    photos: null
}

function reducerForgotten(state = initialState, action) {
    switch (action.type) {
        case ADD_PICTURE:
            return {...state, formData:action.payload}

        // case ADD_NAME:
        //     return {...state, name: action.payload}

        case ADD_IMAGE:
            // const copy = {...state, image: action.payload}
            const copycopy = { ...state, photos: {uploadFiles: [...state.photos.uploadFiles,action.payload]}};
            return copycopy
        case CHANGE_PROGRESS:
            return {...state, progressPercent: action.payload}

        case ERROR_FOUND:
            return {...state, errorFound: action.payload}

        case ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
        
        case INIT_PHOTOS:
            // return {...state, photos: [...state.photos, action.payload]}
            return {...state, photos: action.payload}

        case DELETE_PHOTOS:
            return {...state, photos: {uploadFiles: [...state.photos.uploadFiles.filter(el => el._id !== action.payload)]}}
                
        default:
            return state
    }
}
export default reducerForgotten