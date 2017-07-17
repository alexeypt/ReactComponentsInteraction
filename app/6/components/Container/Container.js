import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';
import eventEmitterService from '../../services/EventEmitterService';

class Container extends React.Component {
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
        eventEmitterService.addListener('changeColor_container', this.changeColor);
    }

    componentWillUnmount(){
        eventEmitterService.removeListener('changeColor_container', this.changeColor);
    }

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    onComponentClick(){
        eventEmitterService.emitEvent('changeColor_leftColumn', ['purple']);
        eventEmitterService.emitEvent('changeColor_rightColumn', ['blue']);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn color="blue" />
                <RightColumn color="purple" />
            </div>
        );
    }
}

export default Container;