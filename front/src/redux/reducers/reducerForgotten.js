import {ADD_PICTURE, ADD_NAME, ADD_IMAGE} from '../actionTypes'

let initialState = {
    formData: '',
    name: '',
    image: '',
}

function reducerForgotten(state = initialState, action) {
    switch (action.type) {
        case ADD_PICTURE:
            return {...state, formData: action.payload}

        case ADD_NAME:
            return {...state, name: action.payload}

        case ADD_IMAGE:
            return {...state, image: action.payload}
                
        default:
            return state
    }
}
export default reducerForgotten