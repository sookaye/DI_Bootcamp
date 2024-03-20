const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

app.post('/api/world', (req, res) => {
  const { value } = req.body;
  res.send(`I received your POST request. This is what you sent me: ${value}`);
});

// Serve React app
app.use(express.static(path.join(__dirname, '../client/public')));

// Catch-all route to serve React app's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
