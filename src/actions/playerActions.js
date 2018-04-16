import { SET_SOUND } from '../constants/actionTypes';

export function setSound(level) {
    return {
        type: SET_SOUND,
        payload: level
    };
}
