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

    onComponentClick(){
        const tempColor = this.refs.leftColumn.state.color;
        this.refs.leftColumn.setState({
            color: this.rightColumnComponent.state.color
        });
        this.rightColumnComponent.onColorChange(tempColor);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <LeftColumn ref="leftColumn" color={this.state.leftColumnColor} />
                <RightColumn ref={(component) => { this.rightColumnComponent = component; }} color={this.state.rightColumnColor} />
            </div>
        );
    }
}

export default Container;