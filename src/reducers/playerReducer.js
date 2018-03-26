import * as types from '../constants/actionTypes';

let initialState = {
    isPlaying: false,
    song: '',
    bpm: 0,
};

export default function player(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case types.PLAY_SUCCESS:
        return {
            ...state,
            isPlaying: true
        };

    case types.PAUSE_SUCCESS:
        return {
            ...state,
            isPlaying: false
        };
    case types.NEXT_TRACK_SUCCESS:
        return {

        };
    case types.REPLAY_SUCCESS:
        return {

        };
    default:
        return state;
    }
}
