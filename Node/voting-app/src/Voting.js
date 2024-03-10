import React from 'react';

const Voting = ({ languages, onVote }) => {
  return (
    <ul>
      {languages.map((language, index) => (
        <li key={index}>
          {language.name}: {language.votes} votes
          <button onClick={() => onVote(index)}>Click to vote</button>
        </li>
      ))}
    </ul>
  );
};

export default Voting;
