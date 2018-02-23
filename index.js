import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import App from './src/components/App';
import getStore from './src/createStore';

let store = getStore();

let realApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

AppRegistry.registerComponent('stuffaremote', () => realApp);
