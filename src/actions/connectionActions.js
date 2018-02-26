import findServer from './findServer';
import * as types from '../constants/actionTypes';

export function connectionSuccess(ws) {
    console.log('SUCCESS');
    return {
        type: types.CONNECTION_SUCCESS,
        payload: ws
    };
}

export function connectionFailure(err) {
    console.log('FAILURE', err);
    return {
        type: types.CONNECTION_FAILURE,
        payload: err
    };
}

export function connectToDesktop() {
    return function(dispatch) {
        return findServer().then( res => {
            dispatch(connectionSuccess(res));
        }).catch( err => {
            dispatch(connectionFailure(err));
        });
    };
}
