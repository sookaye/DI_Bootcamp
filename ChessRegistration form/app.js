const express = require('express');
const knex = require('knex');
const app = express();
const port = 2020;
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

app.post('/register', (req, res) => {
  const {name, email} = req.body;

  db ('registrations')
  .insert({name, email})
  .then (() => {
    res.send('Registration successfull');
  })
  .catch((err) => {
res.status(500).send('Registration failed');
  });
});
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});