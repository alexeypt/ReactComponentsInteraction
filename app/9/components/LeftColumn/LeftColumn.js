import React, { PropTypes } from 'react';
import {observer, inject} from 'mobx-react';
import styles from './LeftColumn.less';

@inject("store") @observer
class LeftColumn extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.store.leftColumnColor
        };

        return (
            <div style={divStyles} className={styles['left-column']}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;