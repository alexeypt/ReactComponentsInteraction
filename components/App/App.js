import React, { PropTypes } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Container from '../Container/Container.js';
import styles from './App.less';

class App extends React.Component {

    render() {
        return (
            <div className={styles['app']}>
                <Header />
                <Container />
                <Footer />
            </div>);
    }

}

export default App;