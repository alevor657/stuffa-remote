import * as types from '../constants/actionTypes';

export default function connection(state = {}, action) {
    switch (action.type) {
    case types.CONNECTION_SUCCESS:
        return { ...state };
    case types.CONNECTION_FAILURE:
        return { ...state };
    default:
        return state;
    }
}
