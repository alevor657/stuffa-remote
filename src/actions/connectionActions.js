import findServer, { directConnect } from './findServer';
import * as types from '../constants/actionTypes';
import drawAlert from '../components/drawAlert';
import { openModal, closeModal } from '../actions/modalActions';

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

export function connectToDesktop(ip = null) {
    return function(dispatch) {
        return determineConnectionType(ip).then( res => {
            dispatch(connectionSuccess(res));
        }).catch( err => {
            dispatch(connectionFailure(err));
            drawAlert(
                () => dispatch(connectToDesktop()),
                () => dispatch(openModal())
            );
        });
    };
}

function determineConnectionType(ip) {
    return ip ? directConnect(ip) : findServer();
}
