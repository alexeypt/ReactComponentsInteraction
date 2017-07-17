import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';
import { changeLeftColumnColor, changeRightColumnColor } from '../../actions/index';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired //from Redux store
    }

    onComponentClick(){
        this.props.changeLeftColumnColor('purple');
        this.props.changeRightColumnColor('blue');
    }


    render() {
        let divStyles = {
            backgroundColor: this.props.color
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

export default connect((state) => {
    return {
        color: state.colors.containerColor
    };
}, (dispatch) => {
    return {
        changeLeftColumnColor: bindActionCreators(changeLeftColumnColor, dispatch),
        changeRightColumnColor: bindActionCreators(changeRightColumnColor, dispatch)
    }
})(Container);