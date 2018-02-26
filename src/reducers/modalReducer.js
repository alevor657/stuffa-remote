import * as types from '../constants/actionTypes';

const initialState = {
    visible: false
};

export default function modal(state = initialState, action) {
    switch (action.type) {
    case types.OPEN_MODAL:
        return {
            ...state,
            visible: true
        };
    case types.CLOSE_MODAL:
        return {
            ...state,
            visible: false
        };
    default:
        return state;
    }
}
