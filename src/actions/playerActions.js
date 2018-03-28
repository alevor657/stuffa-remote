import * as types from '../constants/actionTypes';

export function play() {
    console.log('SENDING PLAY');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                action: types.PLAY,
                payload: null
            };

        ws.send(JSON.stringify(msg));

        return dispatch(playSuccess());
    };
}

function playSuccess() {
    return {
        action: types.PLAY_SUCCESS
    };
}

// playFailure

export function pause() {
    console.log('SENDING PAUSE');
    return (dispatch, getState) => {
        let { ws } = getState().connection;

        let msg = {
            action: types.PAUSE,
            payload: null
        };

        ws.send(JSON.stringify(msg));

        return dispatch(pauseSuccess());                
    };
}

function pauseSuccess() {
    return {
        action: types.PAUSE_SUCCESS
    };
}

// pauseFailure

export function replay() {
    console.log('SENDING REPLAY');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                action: types.REPLAY,
                payload: null
            };

        ws.send(JSON.stringify(msg));
    };
}

export function nextTrack() {
    console.log('SENDING NEXT_TRACK');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                action: types.NEXT_TRACK,
                payload: null
            };

        ws.send(JSON.stringify(msg));
    };
}

function sync() {
    console.log('sync');
    
}
