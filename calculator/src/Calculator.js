import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: '',
      num2: '',
      operation: 'addition',
      result: 0,
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleCalculate = () => {
    const { num1, num2, operation } = this.state;
    let result = 0;

    switch (operation) {
      case 'addition':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case 'subtraction':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case 'multiplication':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case 'division':
        if (parseFloat(num2) !== 0) {
          result = parseFloat(num1) / parseFloat(num2);
        } else {
          result = 'Undefined (division by zero)';
        }
        break;
      default:
        result = 'Invalid operation';
    }

    this.setState({ result });
  }

  render() {
    return (
      <div className='container'>
        <h1>Calculator</h1>
        <input
          type="number"
          name="num1"
          value={this.state.num1}
          onChange={this.handleInputChange}
        />
        <select
          name="operation"
          value={this.state.operation}
          onChange={this.handleInputChange}
        >
          <option value="addition">Addition</option>
          <option value="subtraction">Subtraction</option>
          <option value="multiplication">Multiplication</option>
          <option value="division">Division</option>
        </select>
        <input
          type="number"
          name="num2"
          value={this.state.num2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleCalculate}>Calculate</button>
        <p className='result'>{this.state.result}</p>
      </div>
    );
  }
}

export default Calculator;