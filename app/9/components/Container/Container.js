import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple"
        };
    }

    onComponentClick(){
        this.props.cur.swap(v => Object.assign({}, v, {
            color: 'black'
        }));
        //const tempColor = this.state.leftColumnColor;
        //this.setState({
        //    leftColumnColor: this.state.rightColumnColor,
        //    rightColumnColor: tempColor});
    }

    render() {
        debugger;
        let divStyles = {
            backgroundColor: this.props.cur.value().color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <LeftColumn color={this.state.leftColumnColor} />
                <RightColumn color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;