import React, { PropTypes } from 'react';
import styles from './Header.less';
import { connect } from 'react-redux';


class Header extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired //from Redux store,
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.header}>
                Header
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.headerColor
    };
})(Header);