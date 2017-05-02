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
        this.leftColumnComponent = null;
        this.rightColumnComponent = null;
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple"
        };
        this.leftColumnRefFunction = this.leftColumnRefFunction.bind(this);
    }

    onComponentClick(){
        const tempColor = this.leftColumnComponent.state.color;
        this.leftColumnComponent.setState({
            color: this.rightColumnComponent.state.color
        });
        this.rightColumnComponent.onColorChange(tempColor);
    }

    leftColumnRefFunction(component){
        this.leftColumnComponent = component;
    }
    
    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn ref={this.leftColumnRefFunction} color={this.state.leftColumnColor} />
                <RightColumn ref={(component) => { this.rightColumnComponent = component; }} color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;