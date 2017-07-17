import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './LeftColumn.less';

class LeftColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['left-column']}>
                Left Column
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.leftColumnColor
    };
})(LeftColumn);