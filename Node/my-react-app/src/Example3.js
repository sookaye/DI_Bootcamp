import React, { Component } from 'react';
import jsonData from './data.json';

class Example3 extends Component {
  render() {
    return (
      <div>
        <h2>Experiences</h2>
        {jsonData.Experiences.map((experience) => (
          <div key={experience.id}>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Years: {experience.years}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;
