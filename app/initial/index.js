import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Container from './components/Container/Container.js';
import LeftColumn from './components/LeftColumn/LeftColumn.js';
import RightColumn from './components/RightColumn/RightColumn.js';

ReactDOM.render(
    <App color="chocolate">
        <Header color="red" />
        <Container color="green">
            <LeftColumn color="blue" />
            <RightColumn color="purple" />
        </Container>
        <Footer color="yellow" />
    </App>,
    document.getElementById('app')
);
