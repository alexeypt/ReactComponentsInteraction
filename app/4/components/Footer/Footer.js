import React, { PropTypes } from 'react';
import styles from './Footer.less';

class Footer extends React.Component {
    static contextTypes  = {
        footerColor: React.PropTypes.string
    }

    render() {
        let divStyles = {
            backgroundColor: this.context.footerColor
        };

        return (
            <div style={divStyles} className={styles.footer}>
                Footer
            </div>
        );
    }
}

export default Footer;