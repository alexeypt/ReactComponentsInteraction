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
            colors: {
                headerColor: 'red',
                containerColor: 'green',
                leftColumnColor: 'blue',
                rightColumnColor: 'purple',
                footerColor: 'yellow'
            }
        };
    }

    render() {
        let cursor = Cursor.build(this);
        let colorsCursor = cursor.refine('colors');

        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['app']}>
                <Header cursor={colorsCursor} />
                <Container cursor={colorsCursor} />
                <Footer cursor={colorsCursor} />
            </div>);
    }

}

export default App;