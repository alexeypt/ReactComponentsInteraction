import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    static contextTypes  = {
        leftColumnColor: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.context.leftColumnColor
        };

        return (
            <div style={divStyles} className={styles['left-column']} >
                Left Column
            </div>
        );
    }
}

export default LeftColumn;