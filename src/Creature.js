import React from 'react';

class Creature extends React.Component {
    render() {
        return (
            <li>
                <img src={ this.props.creature.url } alt={ this.props.creature.url } />
            </li>
        ) 
    }
}

export default Creature;