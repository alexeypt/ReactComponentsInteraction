import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static contextTypes  = {
        containerColor: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.context.containerColor
        };

        return (
            <div style={divStyles} className={styles.container}>
                <span className={styles.title}>Container</span>
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Container;