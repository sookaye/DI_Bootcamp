// const express = require('express');
// const app = express();

// const json = {
//   "menu": {
//     "id": "file",
//     "value": "File",
//     "popup": {
//       "menuitem": [
//         { "value": "New", "onclick": "CreateNewDoc()" },
//         { "value": "Open", "onclick": "OpenDoc()" },
//         { "value": "Close", "onclick": "CloseDoc()" }
//       ]
//     }
//   }
// };

// app.get('/api/json', (req, res) => {
//   res.json(json);
// });

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// const http = require('http');
// const server = http.createServer((req, res) => {
//     // Check the URL of the current request
//     if (req.url == '/welcome') {
//         // Inform the client that we send JSON response in the header with the appropriate content type
//         res.setHeader("Content-Type", "application/json");
//         res.writeHead(200);
//         res.end(JSON.stringify({ message: "Welcome New User" }));
//     } else {
//         res.end("Another page");
//     }
// });
// server.listen(3000);
// console.log('Node.js web server at port 5000 is running..');

const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/aboutme', (req, res) => res.send('I love coding!'))
app.get('/tutorial', (req, res) => res.send('Tutorial about express!'))

app.listen(3000)
