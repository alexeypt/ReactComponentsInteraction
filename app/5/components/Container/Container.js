import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import Footer from '../Footer/Footer.js';
import styles from './Container.less';
import {Gateway} from 'react-gateway';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            leftColumnColor: "blue",
            rightColumnColor: "purple",
            footerColor: "yellow"
        };
    }

    onComponentClick(){
        const tempColor = this.state.leftColumnColor;
        const newFooterColor = '#' + Math.random().toString(16).substr(-6);
        this.setState({
            leftColumnColor: this.state.rightColumnColor,
            rightColumnColor: tempColor,
            footerColor: newFooterColor
        });
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn color={this.state.leftColumnColor} />
                <RightColumn color={this.state.rightColumnColor} />
                <Gateway into="footer">
                    <Footer color={this.state.footerColor} />
                </Gateway>
            </div>
        );
    }
}

export default Container;