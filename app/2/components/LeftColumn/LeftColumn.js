import React, { PropTypes } from 'react';
import styles from './LeftColumn.less';

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