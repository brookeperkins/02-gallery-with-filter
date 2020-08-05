import React from 'react';
import Creature from './Creature.js'

class CreatureList extends React.Component {
    render() {
        return (
            <section>
                <ul>
                    {this.props.creatures.map(creature => <Creature creature={creature} />)}
                    {/* {images.map(image => <Creature key={image.url} image={image.url} alt={image.description} />)} */}
                </ul>
            </section>
        )
    }
}

export default CreatureList;