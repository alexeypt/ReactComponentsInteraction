import React from 'react';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    render() {
        return (
            <div className={styles['left-column']}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;