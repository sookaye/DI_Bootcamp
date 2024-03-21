import React, { Component } from 'react';
import jsonData from './data.json';

class Example1 extends Component {
  render() {
    return (
      <div>
        <h2>Social Media Links</h2>
        <ul>
          {jsonData.SocialMedias.map((media) => (
            <li key={media.id}>
              <a href={media.url}>{media.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Example1;
