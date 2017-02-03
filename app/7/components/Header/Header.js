import React, { PropTypes } from 'react';
import styles from './Header.less';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeFooterColor, changeRightColumnColor } from '../../actions/index';

class Header extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired //from Redux store,
    }

    onComponentClick(){
        this.props.changeFooterColor('purple');
        this.props.changeRightColumnColor('yellow');
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.header} onClick={this.onComponentClick.bind(this)}>
                Header
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.headerColor
    };
}, (dispatch) => {
    return {
        changeFooterColor: bindActionCreators(changeFooterColor, dispatch),
        changeRightColumnColor: bindActionCreators(changeRightColumnColor, dispatch)
    }
})(Header);