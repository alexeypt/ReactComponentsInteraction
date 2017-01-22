import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        parentColor: PropTypes.string.isRequired,
        onChangeColor: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            parentColor: this.props.parentColor,
            initial: true
        };
    }

    onComponentClick() {
        this.setState({
            color: this.state.parentColor,
            parentColor: this.state.color
        });
        this.props.onChangeColor(this.state.color);
    }

    render() {
        let divStyles = {
            backgroundColor: this.state.color
        };

        return (
            <div style={divStyles} className={styles['left-column']} onClick={this.onComponentClick.bind(this)}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;