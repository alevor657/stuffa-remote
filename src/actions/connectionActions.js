import findServer, { directConnect } from './findServer';
import * as types from '../constants/actionTypes';
import drawAlert from '../components/drawAlert';
import { openModal, closeModal } from '../actions/modalActions';

export function connectionSuccess(res) {
    console.log('SUCCESS', res);
    return {
        type: types.CONNECTION_SUCCESS,
        payload: {
            ws: res.ws,
            ip: res.desktopAddress
        }
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
    console.log('ATTEMPTING CONNECT');
    return function(dispatch) {
        return determineConnectionType(ip).then( res => {
            res.ws.onclose = () => dispatch(connectToDesktop());

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
