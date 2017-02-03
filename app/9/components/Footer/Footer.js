import React, { PropTypes } from 'react';
import styles from './Footer.less';

class Footer extends React.Component {
    static propTypes = {
        color: PropTypes.string.isRequired
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.color
        };

        return (
            <div style={divStyles} className={styles.footer}>
                Footer
            </div>
        );
    }
}

export default Footer;