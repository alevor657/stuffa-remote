import * as types from '../constants/actionTypes';

let initialState = {
    isPlaying: false,
    song: '',
    artist: '',
    bpm: 0,
    soundLevel: 0,
    bpmInterval: 0,
    bpmJump: 0,
    autoBpm: false
};

/**
 * This reducer does not have corresponding action creators because actions dispatch as is
 * from desktop.
 * 
 * @param {obj} state Redux state
 * @param {obj} action Redux action
 */
export default function player(state = initialState, action) {
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
    case types.SET_SOUND: 
        return {
            ...state,
            soundLevel: action.payload
        };
    case types.BPM_AUTOPLAY_TOGGLE:
        return {
            ...state,
            autoBpm: !state.autoBpm                        
        };

    // case types.NEXT_TRACK_SUCCESS:
    //     return {
    //         ...state,
    //     };
    // case types.REPLAY_SUCCESS:
    //     return {

    //     };
    case types.REQUEST_STATE_SUCCESS: {
        const playerState = JSON.parse(action.payload);

        return {
            ...state,
            ...playerState
        };
    }
    default:
        return state;
    }
}
