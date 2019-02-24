import * as actionTypes from './actionTypes';
import * as userActions from './userActions';

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
                dispatch(authSuccess(
                    response.data.idToken,
                    response.data.localId));
                localStorage.setItem('idToken', response.data.idToken);
                localStorage.setItem('userId', response.data.localId);
                dispatch(userActions.userDataRequest(response.data.localId))
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            })
    }
}

export const autoAuth = (idToken, userId) => {
    return dispatch => {
        dispatch(authStart());
        dispatch(authSuccess(idToken, userId));
        dispatch(userActions.userDataRequest(userId));
    }
}