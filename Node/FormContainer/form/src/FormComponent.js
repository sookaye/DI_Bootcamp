import React from 'react';

const FormComponent = ({ formData }) => {
  return (
    <div>
      <h2>Entered Info:</h2>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Age: {formData.age}</p>
      <p>Gender: {formData.gender}</p>
      <p>Destination: {formData.destination}</p>
      <p>Dietary Restrictions:</p>
      <ul>
        {Object.entries(formData.restrictions).map(([restriction, checked]) => (
          <li key={restriction}>
            {checked && <span>{restriction}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FormComponent;
