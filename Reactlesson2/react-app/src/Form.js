import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Forms() {
  const [username, setUsername] = useState("");

  let header = "";

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const mySubmitHandler = (event) => {
    event.preventDefault(); 
    alert(`${username}`);
  };

  if (username !== "") {
    header = <h2>{username}</h2>;
  }

  return (
    <div>
      <Form onSubmit={mySubmitHandler}>
        <Form.Group controlId="formUsername">
          <Form.Label>Enter your name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your Name"
            value={username}
            onChange={handleInputChange}
          />
        </Form.Group>
        <br></br>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
      {header}
    </div>
  );
}

export default Forms;
