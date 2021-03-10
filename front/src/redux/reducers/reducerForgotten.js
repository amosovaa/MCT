import {ADD_PICTURE, ADD_NAME, ADD_IMAGE, CHANGE_PROGRESS, ERROR_FOUND, ERROR_MESSAGE} from '../actionTypes'

let initialState = {
    formData: '',
    name: '',
    image: '',
    progressPercent: 0,
    errorFound: false,
    errorMessage: ''
}

function reducerForgotten(state = initialState, action) {
    switch (action.type) {
        case ADD_PICTURE:
            return {...state, formData: action.payload}

        case ADD_NAME:
            return {...state, name: action.payload}

        case ADD_IMAGE:
            return {...state, image: action.payload}

        case CHANGE_PROGRESS:
            return {...state, progressPercent: action.payload}

        case ERROR_FOUND:
            return {...state, errorFound: action.payload}

        case ERROR_MESSAGE:
            return {...state, errorMessage: action.payload}
                
        default:
            return state
    }
}
export default reducerForgotten