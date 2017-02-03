import React, { PropTypes } from 'react';
import {observer, inject} from 'mobx-react';
import styles from './RightColumn.less';

@inject("store") @observer
class RightColumn extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.store.rightColumnColor
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;