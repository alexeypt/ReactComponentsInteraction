import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';
import eventEmitterService from '../../services/EventEmitterService';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    onComponentClick(){
        eventEmitterService.emitEvent('changeColor_leftColumn', ['purple']);
        eventEmitterService.emitEvent('changeColor_rightColumn', ['blue']);
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <LeftColumn color="blue" />
                <RightColumn color="purple" />
            </div>
        );
    }
}

export default Container;