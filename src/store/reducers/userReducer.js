import * as actionTypes from '../actions/actionTypes';

const initialState = {
    userData: null
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.USER_DATA_REQUEST:
            return {
                ...state,
                userData: action.userData
            }
        default:
            return state;
    }
};

export default userReducer;