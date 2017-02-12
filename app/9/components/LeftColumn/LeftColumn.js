import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().leftColumnColor
        };

        return (
            <div style={divStyles} className={styles['left-column']}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;