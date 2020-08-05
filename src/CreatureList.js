import React from 'react';
import Creature from './Creature.js'

class CreatureList extends React.Component {
    render() {
        return (
            <main>
                <ul>
                    {this.props.creatures.map(creature => <Creature creature={creature} />)}
                    {/* {images.map(image => <Creature key={image.url} image={image.url} alt={image.description} />)} */}
                </ul>
            </main>
        )
    }
}

export default CreatureList;