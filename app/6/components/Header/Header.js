import React, { PropTypes } from 'react';
import styles from './Header.less';
import eventEmitterService from '../../services/EventEmitterService';

class Header extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
        this.changeColor = this.changeColor.bind(this);
    }

    componentDidMount(){
        eventEmitterService.addListener('changeColor_header', this.changeColor);
    }

    componentWillUnmount(){
        eventEmitterService.removeListener('changeColor_header', this.changeColor);
    }

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.header}>
                Header
            </div>
        );
    }
}

export default Header;