import React, { PropTypes } from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Container from '../Container/Container.js';
import styles from './App.less';

class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    static childContextTypes = {
        headerColor: React.PropTypes.string,
        containerColor: React.PropTypes.string,
        footerColor: React.PropTypes.string,
        leftColumnColor: React.PropTypes.string,
        rightColumnColor: React.PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            leftColumnColor: 'blue',
            rightColumnColor: 'purple'
        };
    }

    getChildContext() {
        return {
            leftColumnColor: this.state.leftColumnColor,
            rightColumnColor: this.state.rightColumnColor
        };
    }

    onAppClick() {
        this.setState({
            leftColumnColor: this.state.rightColumnColor,
            rightColumnColor: this.state.leftColumnColor
        });
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['app']} onClick={this.onAppClick.bind(this)}>
                <Header color="red" />
                <Container color="green"/>
                <Footer color="yellow" />
            </div>);
    }

}

export default App;