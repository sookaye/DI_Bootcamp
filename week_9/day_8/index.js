const express = require('express');
const app = express();
const port = 1000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log(formData);

    res.redirect('/result');
});

app.get('/result', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Form Result</title>
        </head>
        <body>
            <h2>Form Result</h2>
            <p>First Name: ${req.query.firstName}</p>
            <p>Last Name: ${req.query.lastName}</p>
            <!-- Add more fields as needed -->
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});