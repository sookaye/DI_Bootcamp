import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setLoggedIn }) => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check credentials (you can replace this with your authentication logic)
    if (credentials.username === 'test' && credentials.password === 'test') {
      localStorage.setItem('loggedIn', 'true');
      setLoggedIn(true);
      navigate('/home');
    }
  };
  return (
    <div className="container mt-5 signup-form">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            name="username"
            value={credentials.username}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br/>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <br/>
        <Button variant="success" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};
export default Login;