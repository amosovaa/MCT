import React from 'react';
import { useDispatch } from 'react-redux';
import {logoutAC} from '../../redux/actionCreators'

function Logout(props) {
    const dispatch = useDispatch()
    dispatch(logoutAC())
    return (
        <div>
            
        </div>
    );
}

export default Logout;