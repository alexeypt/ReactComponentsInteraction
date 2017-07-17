import React, { PropTypes } from 'react';
import LeftColumn from '../LeftColumn/LeftColumn.js';
import RightColumn from '../RightColumn/RightColumn.js';
import styles from './Container.less';

class Container extends React.Component {
    static propTypes = {
        cursor: PropTypes.object.isRequired
    }

    onComponentClick(){
        this.props.cursor.swap(v => Object.assign({}, v, {
            leftColumnColor: 'purple',
            rightColumnColor: 'blue'
        }));
    }


    render() {
        let divStyles = {
            backgroundColor: this.props.cursor.value().containerColor
        };

        return (
            <div style={divStyles} className={styles.container} onClick={this.onComponentClick.bind(this)}>
                <span className={styles.title}>Container</span>
                <LeftColumn cursor={this.props.cursor} />
                <RightColumn cursor={this.props.cursor} />
            </div>
        );
    }
}

export default Container;