import { combineReducers } from 'redux';
import connection from './connectionReducer';
import modal from './modalReducer';

export default combineReducers({
    connection,
    modal
});
