import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';
import eventEmitterService from '../../services/EventEmitterService';

class LeftColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color
        };
    }

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    componentDidMount(){
        eventEmitterService.addListener('changeColor_leftColumn', this.changeColor.bind(this));
    }

    componentWillUnmount(){
        eventEmitterService.removeListener('changeColor_leftColumn', this.changeColor.bind(this));
    }


    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles['left-column']}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;