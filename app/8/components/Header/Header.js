import React, { PropTypes } from 'react';
import {observer, inject} from 'mobx-react';
import styles from './Header.less';

@inject("store") @observer
class Header extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    onComponentClick(){
        this.props.store.changeFooterColor('purple');
        this.props.store.changeRightColumnColor('yellow');
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.store.headerColor
        };

        return (
            <div style={divStyles} className={styles.header} onClick={this.onComponentClick.bind(this)}>
                Header
            </div>
        );
    }
}

export default Header;