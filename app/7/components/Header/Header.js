import React, { PropTypes } from 'react';
import styles from './Header.less';

class Header extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().headerColor
        };

        return (
            <div style={divStyles} className={styles.header}>
                Header
            </div>
        );
    }
}

export default Header;