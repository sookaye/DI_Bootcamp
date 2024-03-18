import React, { Component } from 'react';

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      show: true
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  handleDelete = () => {
    this.setState({ show: false });
  }

  render() {
    const { counter, show } = this.state;
    return (
      <div>
        <h1>Counter: {counter}</h1>
        <button onClick={this.handleClick}>Increment</button>
        {show && <Child />}
        <button onClick={this.handleDelete}>Delete header</button>
      </div>
    );
  }
}

class Child extends Component {
  componentWillUnmount() {
    alert('The component named header is about to be unmounted');
  }

  render() {
    return (
      <div>
        <h2>Hello World!</h2>
      </div>
    );
  }
}

export default Lifecycle;
