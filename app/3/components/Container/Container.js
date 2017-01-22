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
        this.rightColumnComponent = null;
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple"
        };
    }

    changeColor(newColor){
        const randomColor = '#' + Math.random().toString(16).substr(-6);
        this.setState({
            color: newColor
        });
        this.rightColumnComponent.onColorChange(randomColor);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container}>
                <LeftColumn color={this.state.leftColumnColor} parentColor={this.state.color} onChangeColor={this.changeColor.bind(this)} />
                <RightColumn ref={(component) => { this.rightColumnComponent = component; }} color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;