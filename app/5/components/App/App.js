import React, { PropTypes } from 'react';
import Header from '../Header/Header.js';
import Container from '../Container/Container.js';
import styles from './App.less';
import { GatewayProvider, GatewayDest} from 'react-gateway';

class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <GatewayProvider>
                <div style={divStyles} className={styles['app']}>
                    <Header color="red" />
                    <Container color="green" />
                    <GatewayDest name="footer" className="Footer__footer"/>
                </div>
            </GatewayProvider>);
    }

}

export default App;