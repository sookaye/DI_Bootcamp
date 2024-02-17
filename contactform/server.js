
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('client'));

app.post('/contact-form', (req, res) => {
    const formData = req.body;
    console.log(formData);
    res.json(formData);
});

app.listen(port, () => {
    console.log(port);
});

