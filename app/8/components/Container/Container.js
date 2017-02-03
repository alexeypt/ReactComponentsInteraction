import React, { PropTypes } from 'react';
import {observer, inject} from 'mobx-react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

@inject("store") @observer
class Container extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }
    
    render() {
        let divStyles = {
            backgroundColor: this.props.store.containerColor
        };

        return (
            <div style={divStyles} className={styles.container} >
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Container;