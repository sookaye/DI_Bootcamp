
import React, { Component } from 'react';

class BuggyCounter2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      crash: false
    };
  }

  handleClick = () => {
    this.setState({ crash: true });
  }

  render() {
    if (this.state.crash) {
      throw new Error('NormalComponent crashed!');
    }

    return (
      <div>
        <h2>This is a Normal Component</h2>
        <button onClick={this.handleClick}>Crash Normal Component</button>
      </div>
    );
  }
}

export default BuggyCounter2;
