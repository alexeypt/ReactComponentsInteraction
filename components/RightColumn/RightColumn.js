import React from 'react';
import styles from './RightColumn.less';

class RightColumn extends React.Component {
    render() {
        return (
            <div className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;