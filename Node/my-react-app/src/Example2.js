import React, { Component } from 'react';
import jsonData from './data.json';

class Example2 extends Component {
  render() {
    return (
      <div>
        <h2>Skills</h2>
        <ul>
          {jsonData.Skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example2;
