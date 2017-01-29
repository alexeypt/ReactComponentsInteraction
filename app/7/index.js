import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App.js';
import reducer from './reducers/index'

const store = createStore(reducer, undefined, applyMiddleware(a, b));

ReactDOM.render(
    <Provider store={store}>
        <App color="chocolate"></App>
    </Provider>,
    document.getElementById('app')
);
