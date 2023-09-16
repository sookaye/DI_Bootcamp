const express = require('express');
const app = express();
const port = 3000;

// Empty array to store registered users
const users = [];

// Middleware to parse request body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve the static files
app.use(express.static('public'));

// GET route for the register form
app.get('/registerForm', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});

// GET route for the login form
app.get('/loginForm', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// POST route for user registration
app.post('/register', (req, res) => {
  const { name, lastName, email, username, password } = req.body;

  // Create a new user object
  const user = {
    id: users.length + 1,
    name,
    lastName,
    email,
    username,
    password
  };

  // Save the user object to the array
  users.push(user);

  // Send a success message
  res.send('User registered successfully!');
});

// POST route for user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if the user exists
  const user = users.find(user => user.username === username && user.password === password);

  if (user) {
    // Send the user data as a response
    res.send(user);
  } else {
    // Send an error message if the user is not found
    res.status(404).send('User not found!');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
