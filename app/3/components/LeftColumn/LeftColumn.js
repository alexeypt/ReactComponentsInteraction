import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired,
        onChangeColor: React.PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.onComponentClick = this.onComponentClick.bind(this);
    }

    onComponentClick() {
        this.props.onChangeColor(this.props.color);
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['left-column']} onClick={this.onComponentClick}>
                Left Column
            </div>
        );
    }
}

export default LeftColumn;