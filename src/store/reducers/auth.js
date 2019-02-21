import * as actionTypes from '../actions/actionTypes';

const initialState = {
    idToken: null,
    userId: null,
    error: null,
    loading: false
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.idToken,
                userId: action.userId,
                email: action.email,
                error: null,
                loading: false
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error.message,
                loading: false
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                idToken: null,
                userId: null
            }
        case actionTypes.AUTH_AUTO_LOG_IN:
            return {
                ...state,
                idToken: action.idToken,
                userId: action.userId
            }
        case actionTypes.AUTH_PULL_USERDATA_TO_STORE:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state;
    }
};

export default reducer;
