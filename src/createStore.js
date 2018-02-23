import { createStore, applyMiddleware, compose } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function getStore() {
    const enhancer = compose(
        applyMiddleware(thunk, invariant())
    );

    const store = createStore(
        rootReducer,
        enhancer
    );

    return store;
}
