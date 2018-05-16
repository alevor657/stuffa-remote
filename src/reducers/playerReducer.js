import * as types from '../constants/actionTypes';

let initialState = {
    isPlaying: false,
    song: '',
    artist: '',
    bpm: 0,
    soundLevel: 0,
    bpmInterval: 0,
    bpmJump: 0,
    autoBpm: false,
    baseBpm: 0
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
    case types.UPDATE: {
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
