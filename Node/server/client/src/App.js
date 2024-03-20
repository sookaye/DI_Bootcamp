import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    message: '',
    inputValue: ''
  };

  componentDidMount() {
    this.fetchMessage();
  }

  fetchMessage = async () => {
    try {
      const response = await fetch('/api/hello');
      const message = await response.text();
      this.setState({ message });
    } catch (error) {
      console.error('Error fetching message:', error);
    }
  };

  handleSubmit = async event => {
    event.preventDefault();
    try {
      const response = await fetch('/api/world', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value: this.state.inputValue })
      });
      const data = await response.text();
      this.setState({ message: data });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
