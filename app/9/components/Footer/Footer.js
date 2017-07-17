import React, { PropTypes } from 'react';
import {observer, inject} from 'mobx-react';
import styles from './Footer.less';

@inject("store") @observer
class Footer extends React.Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    }

    onComponentClick(){
        this.props.store.updateColors('colors.json');
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.store.footerColor
        };

        return (
            <div style={divStyles} className={styles.footer} onClick={this.onComponentClick.bind(this)}>
                Footer
            </div>
        );
    }
}

export default Footer;