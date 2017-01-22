import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes  = {
        color: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.container}>
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Container;