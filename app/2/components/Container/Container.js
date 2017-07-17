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
        this.titleNode = null;
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple"
        };
        this.leftColumnRefFunction = this.leftColumnRefFunction.bind(this);
        this.titleNodeRefFunction = this.titleNodeRefFunction.bind(this);
    }

    onComponentClick(){
        //just an example, not recommended to do it!
        const tempColor = this.leftColumnComponent.state.color;
        this.leftColumnComponent.setState({
            color: this.rightColumnComponent.state.color
        });
        this.rightColumnComponent.onColorChange(tempColor);

        if (this.titleNode){
            this.titleNode.style.color = 'red';
        }
    }

    leftColumnRefFunction(component){
        this.leftColumnComponent = component;
    }

    titleNodeRefFunction(component){
        this.titleNode = component;
    }
    
    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span ref={this.titleNodeRefFunction} className={styles.title}>Container</span>
                <LeftColumn ref={this.leftColumnRefFunction} color={this.state.leftColumnColor} />
                <RightColumn ref={(component) => { this.rightColumnComponent = component; }} color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;