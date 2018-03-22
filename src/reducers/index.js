import { combineReducers } from 'redux';
import connection from './connectionReducer';
import modal from './modalReducer';
import player from './playerReducer';

export default combineReducers({
    connection,
    modal,
    player
});
