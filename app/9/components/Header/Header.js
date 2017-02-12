import React, { PropTypes } from 'react';
import styles from './Header.less';

class Header extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
    }

    onComponentClick(){
        this.props.cursor.swap(v => Object.assign({}, v, {
            footerColor: 'purple',
            rightColumnColor: 'yellow'
        }));
    }

    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().headerColor
        };

        return (
            <div style={divStyles} className={styles.header} onClick={this.onComponentClick.bind(this)}>
                Header
            </div>
        );
    }
}

export default Header;