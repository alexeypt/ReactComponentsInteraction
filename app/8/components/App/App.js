import React, { PropTypes } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Container from '../Container/Container.js';
import styles from './App.less';

class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired//from Redux store
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['app']}>
                <Header />
                <Container />
                <Footer />
            </div>);
    }

}

export default App;