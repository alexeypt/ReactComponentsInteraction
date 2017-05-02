import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired //from Redux store
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.container}>
                <span className={styles.title}>Container</span>
                <LeftColumn />
                <RightColumn />
            </div>
        );
    }
}

export default connect((state) => {
    return {
        color: state.colors.containerColor
    };
})(Container);