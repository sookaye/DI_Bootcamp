import React from 'react';
import BookForm from './Forminput';
import UserFavoriteAnimals from './UserFavoriteAnimals';

const App = () => {
    const myelement = <h1>I Love JSX!</h1>;
    const sum = 5 + 5;
  
    const user = {
        firstName: 'Bob',
        lastName: 'Dylan',
        favAnimals: ['Horse', 'Turtle', 'Elephant', 'Monkey'],
      };
    
  return (
    <>
    <div>
      <p>Hello World!</p>
      {myelement}
      <p>React is {sum} times better with JSX</p>

      <h3>{user.firstName}</h3>
      <h3>{user.lastName}</h3>

      {/* Exercise 2 */}
      <UserFavoriteAnimals favAnimals={user.favAnimals} />
    </div>

    <div className="container">
      <h1>Book Form</h1>
      <BookForm />
    </div>
    </>
  );
};

export default App;
