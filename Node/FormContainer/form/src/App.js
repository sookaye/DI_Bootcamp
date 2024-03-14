import React, { useState } from 'react';
import FormComponent from './FormComponent';

const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    destination: '',
    restrictions: {
      nutsFree: false,
      lactoseFree: false,
      isVegan: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? { ...prevFormData[name], [value]: checked } : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <form className="inputForm" onSubmit={handleSubmit}>
        <input className="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} /><br />
        <input className="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} /><br />
        <input className="text" name="age" placeholder="Age" value={formData.age} onChange={handleChange} /><br /><br />
        <label>
          <input className="radiobutton" type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} />
          Male
        </label><br />
        <label>
          <input className="radiobutton" type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} />
          Female
        </label><br />
        <label className="destination-header">Select your destination</label><br />
        <select className="destination-input" name="destination" value={formData.destination} onChange={handleChange}>
          <option value="">-- Please Choose a destination --</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select><br /><br />
        <label className="restrictions-title">Dietary restrictions:</label><br />
        <div className="restrictions">
          <input type="checkbox" name="restrictions" value="nutsFree" checked={formData.restrictions.nutsFree} onChange={handleChange} /><span>Nuts free</span><br />
          <input type="checkbox" name="restrictions" value="lactoseFree" checked={formData.restrictions.lactoseFree} onChange={handleChange} /><span>Lactose free</span><br />
          <input type="checkbox" name="restrictions" value="isVegan" checked={formData.restrictions.isVegan} onChange={handleChange} /><span>Vegan</span>
        </div>
        <button type="submit" className="submit">Submit</button>
      </form>
      <FormComponent formData={formData} />
    </div>
  );
};

export default App;
