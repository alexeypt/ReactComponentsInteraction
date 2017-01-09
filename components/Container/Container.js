import React from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Container;