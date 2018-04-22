import { SET_SOUND, BPM_AUTOPLAY_TOGGLE } from '../constants/actionTypes';

export function setSound(level) {
    return {
        type: SET_SOUND,
        payload: level
    };
}

export function toggleBpmAutoplay() {
    return {
        type: BPM_AUTOPLAY_TOGGLE,
    };
}
