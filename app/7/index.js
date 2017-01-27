import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App.js';
import reducer from './reducers/index'

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App color="chocolate"></App>
    </Provider>,
    document.getElementById('app')
);
