import React, { PropTypes } from 'react';
import styles from './App.less';

class App extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles['app']}>
                {this.props.children}
            </div>);
    }

}

export default App;