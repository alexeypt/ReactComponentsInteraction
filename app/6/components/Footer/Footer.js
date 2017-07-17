import React, { PropTypes } from 'react';
import styles from './Footer.less';
import eventEmitterService from '../../services/EventEmitterService';


class Footer extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
        this.changeColor = this.changeColor.bind(this);
    }

    componentDidMount(){
        eventEmitterService.addListener('changeColor_footer', this.changeColor);
    }

    componentWillUnmount(){
        eventEmitterService.removeListener('changeColor_footer', this.changeColor);
    }

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    onComponentClick(){
        fetch('colors.json')
            .then(result => result.json())
            .then(json => this.successColors(json))
    }

    successColors(data) {
        eventEmitterService.emitEvent('changeColor_leftColumn', [data.leftColumnColor]);
        eventEmitterService.emitEvent('changeColor_rightColumn', [data.rightColumnColor]);
        eventEmitterService.emitEvent('changeColor_header', [data.headerColor]);
        eventEmitterService.emitEvent('changeColor_footer', [data.footerColor]);
        eventEmitterService.emitEvent('changeColor_container', [data.containerColor]);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles.footer}  onClick={this.onComponentClick.bind(this)}>
                Footer
            </div>
        );
    }
}

export default Footer;