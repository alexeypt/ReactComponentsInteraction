import React, { PropTypes } from 'react';
import styles from './Header.less';

class Header extends React.Component {
    static contextTypes  = {
        headerColor: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.context.headerColor
        };

        return (
            <div style={divStyles} className={styles.header}>
                Header
            </div>
        );
    }
}

export default Header;