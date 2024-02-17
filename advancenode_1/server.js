const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3030;
const products_routes = require('./routes/products.js');

// Middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (e.g., CSS)
app.use(express.static('client'));

// use json
app.use(express.json());

// Add product routes to server
app.use('/api/products', products_routes);


// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});