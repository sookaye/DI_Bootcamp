
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3004;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/aboutMe/:hobby', (req, res) => {
    const hobby = req.params.hobby;
    if (isNaN(hobby)) {
        res.send(`My hobby is ${hobby}`);
    } else {
        res.status(404).send('Invalid hobby parameter');
    }
});

app.get('/pic', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pic.html'));
});

app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'form.html'));
});

app.post('/formData', (req, res) => {
    const email = req.body.email;
    const message = req.body.message;
    res.send(`${email} sent you a message: "${message}"`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
