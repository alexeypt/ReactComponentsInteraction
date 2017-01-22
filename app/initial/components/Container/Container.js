import React, { PropTypes } from 'react';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default Container;