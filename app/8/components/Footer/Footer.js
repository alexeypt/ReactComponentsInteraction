import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateColors } from '../../actions/index';
import styles from './Footer.less';

class Footer extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired//from Redux store
    }

    onComponentClick(){
        this.props.updateColors('colors.json');
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div onClick={this.onComponentClick.bind(this)} style={divStyles} className={styles.footer}>
                Footer
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.footerColor
    };
}, (dispatch) => {
    return {
        updateColors: bindActionCreators(updateColors, dispatch)
    }
})(Footer);