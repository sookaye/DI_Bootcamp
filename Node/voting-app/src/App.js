import React, { useState } from 'react';
import Voting from './Voting';

const App = () => {
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ]);

  const handleVote = (index) => {
    setLanguages((prevLanguages) => {
      const newLanguages = [...prevLanguages];
      newLanguages[index].votes += 1;
      return newLanguages;
    });
  };

  return (
    <div>
      <h1>Vote Your Language</h1>
      <Voting languages={languages} onVote={handleVote} />
    </div>
  );
};

export default App;
