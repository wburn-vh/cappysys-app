import * as actionTypes from '../actions/actionTypes';

const initialState = {
    idToken: null,
    userId: null,
    error: null
};

function authReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return {
                ...state,
                error: null
            }
        case actionTypes.AUTH_SUCCESS:
            return {
                ...state,
                idToken: action.idToken,
                userId: action.userId,
                error: null
            }
        case actionTypes.AUTH_FAIL:
            return {
                ...state,
                error: action.error.message
            }
        case actionTypes.AUTH_LOGOUT:
            return {
                ...state,
                idToken: null,
                userId: null
            }
        default:
            return state;
    }
};

export default authReducer;
