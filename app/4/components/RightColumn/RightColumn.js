import React, { PropTypes } from 'react';
import styles from './RightColumn.less';

class RightColumn extends React.Component {
    static contextTypes  = {
        rightColumnColor: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.context.rightColumnColor
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;