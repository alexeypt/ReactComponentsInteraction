import React, { PropTypes } from 'react';
import {observer} from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Container from '../Container/Container.js';
import styles from './App.less';

@observer
class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
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
                <DevTools />
            </div>);
    }

}

export default App;