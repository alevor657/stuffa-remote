import * as types from '../constants/actionTypes';

let initialState = {
    song: '',
    bpm: 0,
};

export default function player(state = initialState, action) {
    console.log(action);
    switch (action.type) {
    case types.PLAY:
        return {
            
        };

    case types.PAUSE:
        return {
            
        };
    case types.NEXT_TRACK:
        return {

        };
    case types.REPLAY:
        return {

        };
    default:
        return state;
    }
}
