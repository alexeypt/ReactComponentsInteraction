import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import App from './components/App/App.js';
import ColorStore from './stores/colorStore.js';

const store = new ColorStore();

ReactDOM.render(
    <Provider store={store}>
        <App color="chocolate"></App>
    </Provider>,
    document.getElementById('app')
);
