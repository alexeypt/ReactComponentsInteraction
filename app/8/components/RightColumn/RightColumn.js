import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './RightColumn.less';

class RightColumn extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['right-column']}>
                Right Column
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.rightColumnColor
    };
})(RightColumn);