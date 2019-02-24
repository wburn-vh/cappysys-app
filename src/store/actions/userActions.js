import * as actionTypes from './actionTypes';
import axios from 'axios';

export const pullData = (userData) => {
    return {
        type: actionTypes.USER_DATA_REQUEST,
        userData: userData
    }
}

export const userDataRequest = (userId) => {
    return dispatch => {
        axios.get('https://cappy-sys.firebaseio.com/Users/' + userId + '.json')
            .then(response => {
                dispatch(pullData(response.data))
            })
            .catch(err => console.log(err))
    }
}
