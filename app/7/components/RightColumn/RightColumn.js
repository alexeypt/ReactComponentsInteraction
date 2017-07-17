import React, { PropTypes } from 'react';
import styles from './RightColumn.less';

class RightColumn extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().rightColumnColor
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;