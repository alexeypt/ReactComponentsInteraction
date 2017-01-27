import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';
import { footerChangeColor } from '../../actions/index';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired //from Redux store
    }

    constructor(props) {
        super(props);
        //this.state = {
        //    color: this.props.color,
        //    leftColumnColor: "blue",
        //    rightColumnColor: "purple"
        //};
    }

    onComponentClick(){
        this.props.dispatch(this.props.footerChangeColor("gray"));
        //const tempColor = this.state.leftColumnColor;
        //this.setState({
        //    leftColumnColor: this.state.rightColumnColor,
        //    rightColumnColor: tempColor});
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <LeftColumn color="blue" />
                <RightColumn color="purple" />
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
        footerChangeColor: footerChangeColor,
        dispatch: dispatch
    }
})(Container);