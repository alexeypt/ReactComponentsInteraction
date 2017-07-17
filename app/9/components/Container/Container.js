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

    onComponentClick(){
        this.props.store.changeLeftColumnColor('purple');
        this.props.store.changeRightColumnColor('blue');
    }
    
    render() {
        let divStyles = {
            backgroundColor: this.props.store.containerColor
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default Container;