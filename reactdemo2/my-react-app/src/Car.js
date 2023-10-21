import React, { Component } from 'react';

class Car extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.colors,
            speed: 0,
            wheeltype:'cosmic'
        }
    } 
    accelerate = (event) => {
        this.setState({speed: this.state.speed + 20})
    }
    brake = (event) => {
        if(this.state.speed >= 20) {
        this.setState({speed: this.state.speed - 20})
        }
    }

    changeColor = (event) => {
       let  number_index = Math.floor(Math.random() * (11 - 0 + 1) + 0)
        this.setState({color: this.props.colors[number_index]})
    }
    render() {
        return (
        <div>
        <h1>I am a car of {this.state.color}{this.state.wheeltype}</h1>
        <button onClick={this.accelerate}>Acclerate</button>
        <button onClick={this.brake}>Brake</button>
        <button onClick={this.changeColor}>Change color</button>
        </div>
        )
    }
}

export default Car;