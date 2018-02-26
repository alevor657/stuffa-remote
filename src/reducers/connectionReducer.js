import * as types from '../constants/actionTypes';

export default function connection(state = { failCounter: 0}, action) {
    switch (action.type) {
    case types.CONNECTION_SUCCESS:
        return {
            ...state,
            ws: action.payload,
            failCouner: 0
        };
    case types.CONNECTION_FAILURE:
        return {
            ...state,
            ws: null,
            failCounter: state.failCounter + 1,
        };
    default:
        return state;
    }
}
