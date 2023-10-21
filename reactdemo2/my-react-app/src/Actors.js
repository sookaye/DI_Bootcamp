import React, { Component } from 'react';
import actorImage from './actor.png';

class Actors extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName:'Ashley',
            LastName: 'Sookaye',
            speed: 0
        }
    } 
    
    render() {
        return (
            <div>
            {this.state.speed}
            <h1>I am {this.state.firstName} {this.state.lastName}</h1>
            <img src={actorImage} alt="Actor" />
          </div>
        )
    }
}
export default Actors;