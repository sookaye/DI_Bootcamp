import './App.css';
import Home from './home';
import Body from './body';
import Nav from './nav';
import axios from 'axios';

function Products() {
  axios.get('https://fakestoreapi.com/products')
  .then(function(response) {
    console.log(response);
  })
};

function App() {
  return (
    Products(),
    <div className="App">
      <Nav />
       <Body />
      <Home />
      <header className="App-header">
        <h2>Hello world</h2>
      </header>
    </div>
  );
}

export default App;
