import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: idToken,
        userId: userId
    }
}

export const logout = () => {
    localStorage.removeItem('idToken')
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const pullDataToStore = (userData) => {
    return {
        type: actionTypes.AUTH_PULL_USERDATA_TO_STORE,
        userData: userData
    }
}

export const getUserData = (userId) => {
    return dispatch => {
        axios.get()
    }
}

export const autoAuth = (idToken, userId) => {
    return dispatch => {
        dispatch(authStart());
        dispatch(authSuccess(idToken, userId));
    }
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBb-g7QW3rnYPsNDrFsxd3ozcIL5txyFXk', authData)
            .then(response => {
                // console.log(response);
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                localStorage.setItem('idToken', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
            })
            .catch(err => {
                // console.log(err);
                dispatch(authFail(err.response.data.error));
            })
    }
}
