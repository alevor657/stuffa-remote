import * as types from '../constants/actionTypes';

export function play() {
    console.log('PLAY');
    return (dispatch, getState) => {
        let { ws } = getState().connection,
            msg = {
                type: types.PLAY,
                payload: null
            };

        console.log('ws', ws);
        ws.send(JSON.stringify(msg));
    };
}

export function pause() {
    console.log('PAUSE');
    return {
        type: types.PAUSE,
        payload: null
    };
}

export function replay() {
    console.log('REPLAY');
    return {
        type: types.REPLAY,
        payload: null
    };
}

export function nextTrack() {
    console.log('NEXT TRACK');
    return {
        type: types.NEXT_TRACK,
        payload: null
    };
}

function SyncSuccess() {

}

function SyncFailure() {

}
