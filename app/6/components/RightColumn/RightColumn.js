import React, { PropTypes } from 'react';
import styles from './RightColumn.less';
import eventEmitterService from '../../services/EventEmitterService';

class RightColumn extends React.Component {
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

    changeColor(newColor){
        this.setState({
            color: newColor
        });
    }

    componentDidMount(){
        eventEmitterService.addListener('changeColor_rightColumn', this.changeColor);
    }

    componentWillUnmount(){
        eventEmitterService.removeListener('changeColor_rightColumn', this.changeColor);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default RightColumn;