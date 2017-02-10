import React, { PropTypes } from 'react';
import { Cursor } from 'react-cursor';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Container from '../Container/Container.js';
import styles from './App.less';

class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props){
        super(props);
        this.state = {
            header: {
                color: 'red'
            },
            container: {
                color: 'green',
                leftColumnColor: 'blue',
                rightColumnColor: 'purple'
            },
            footer: {
                footerColor: 'yellow'
            }
        };
    }

    render() {
        debugger;
        let cur = Cursor.build(this);

        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['app']}>
                <Header color="red" />
                <Container color="green" cur={cur.refine('container')} />
                <Footer color="yellow" />
            </div>);
    }

}

export default App;