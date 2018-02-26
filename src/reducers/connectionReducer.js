import * as types from '../constants/actionTypes';

export default function connection(state = {}, action) {
    console.log(action);
    switch (action.type) {
    case types.CONNECTION_SUCCESS:
        return { ws: action.payload, ...state };
    case types.CONNECTION_FAILURE:
        return { ws: undefined, ...state };
    default:
        return state;
    }
}
