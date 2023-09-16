const importedNumber = require('./main');
const b = 5;
const sum = importedNumber + b;
console.log(sum);

const http = require('http');
const importedNumber = require('./main');
const { create } = require('domain');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<p>My Module is ${importedNumber}</p><h1>Hi there at the frontend</h1>`);
});

const port = 3000;

server.listen(port, () => {
  console.log("I'm listening");
});

const http = require('http');
const getCurrentDateTime = require('./main');

const server2 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  const dateTime = getCurrentDateTime();
  res.end(`<p>Current Date and Time: ${dateTime}</p>`);
});

const port2 = 8080;

server.listen(port, () => {
  console.log("Server is running on http://localhost:8080/");
});

