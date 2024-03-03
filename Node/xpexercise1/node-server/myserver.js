const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello, this is HTML line 1</h1>');
    res.write('<p>This is HTML line 2</p>');
    res.write('<a href="#">HTML line 3 (a link)</a>');
    res.end();
});

server.listen(3005, 'localhost', () => {
    console.log('Server is running on http://localhost:3005');
});
