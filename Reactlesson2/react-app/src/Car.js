import React, { useState } from 'react';
import Garage from './Garage';

const carInfo = { name: "Ford", model: "Mustang" };

function Car() {
    const [color] = useState("blue");
    return (
      <div>
        <h2>This car is {color} {carInfo.model}</h2>
        <Garage size="small" />
      </div>
    );
  }
  
  export default Car;