import { createStore, applyMiddleware, compose } from 'redux';
import invariant from 'redux-immutable-state-invariant';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

export default function getStore() {
    const enhancer = composeWithDevTools(
        applyMiddleware(
            thunk
        )
    );

    const store = createStore(
        rootReducer,
        enhancer
    );

    return store;
}
