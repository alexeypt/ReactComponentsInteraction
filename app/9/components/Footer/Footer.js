import React, { PropTypes } from 'react';
import styles from './Footer.less';

class Footer extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    onComponentClick(){
        fetch('colors.json')
            .then(result => result.json())
            .then(json => this.successColors(json))
    }

    successColors(data) {
        this.props.cursor.swap(v => Object.assign({}, v, {
            ...data
        }));
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().footerColor
        };



        return (
            <div style={divStyles} className={styles.footer} onClick={this.onComponentClick.bind(this)}>
                Footer
            </div>
        );
    }
}

export default Footer;