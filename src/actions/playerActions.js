import * as types from '../constants/actionTypes';

export function play() {
    console.log('SENDING PLAY');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                type: types.PLAY,
                payload: null
            };

        ws.send(JSON.stringify(msg));

        return {type: ''};
    };
}

function playSuccess() {
    return {
        type: types.PLAY_SUCCESS
    };
}

// playFailure

export function pause() {
    console.log('SENDING PAUSE');
    return (dispatch, getState) => {
        let { ws } = getState().connection;

        let msg = {
            type: types.PAUSE,
            payload: null
        };

        ws.send(JSON.stringify(msg));

        return dispatch(pauseSuccess());                
    };
}

function pauseSuccess() {
    return {
        type: types.PAUSE_SUCCESS
    };
}

// pauseFailure

export function replay() {
    console.log('SENDING REPLAY');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                type: types.REPLAY,
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
                type: types.NEXT_TRACK,
                payload: null
            };

        ws.send(JSON.stringify(msg));
    };
}

function sync() {
    
    
}

