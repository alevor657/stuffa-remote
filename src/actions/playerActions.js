import * as types from '../constants/actionTypes';

export function play() {
    console.log('PLAY');
    return {
        action: types.PLAY,
        payload: null
    };
}

export function pause() {
    console.log('PAUSE');
    return {
        action: types.PAUSE,
        payload: null
    };
}

export function replay() {
    console.log('REPLAY');
    return {
        action: types.REPLAY,
        payload: null
    };
}

export function nextTrack() {
    console.log('NEXT TRACK');
    return {
        action: types.NEXT_TRACK,
        payload: null
    };
}
