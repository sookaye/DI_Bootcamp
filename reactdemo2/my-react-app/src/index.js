import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FormComponent from './form';
import Car from './Car';
import Actors from './Actors';
import Sunrise from './Sunrise';

const root = ReactDOM.createRoot(document.getElementById('root'));
const carColors = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown"
] 

root.render(
  <React.StrictMode>
    <App />
    <FormComponent />
    <Car colors={carColors}/>
    <Actors/>
    <Sunrise/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
