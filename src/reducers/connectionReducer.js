import * as types from '../constants/actionTypes';

let initialState = {
    ws: null,
    ip: '',
    failCounter: 0,
    err: ''
};

export default function connection(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case types.CONNECTION_SUCCESS:
        return {
            ...state,
            ws: action.payload.ws,
            ip: action.payload.ip,
            failCounter: 0,
            err: ''
        };

    case types.CONNECTION_FAILURE:
        return {
            ...state,
            ws: null,
            ip: '',
            failCounter: state.failCounter + 1,
            err: action.payload
        };
    case types.CONNECTION_DESTROYED:
        return {
            ...initialState
        };
    default:
        return state;
    }
}
