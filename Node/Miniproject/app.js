// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3003;

app.use(bodyParser.urlencoded({ extended: true }));

const shoppingList = [];

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/add', (req, res) => {
    const newItem = {
        item: req.body.item,
        amount: req.body.amount
    };

    shoppingList.push(newItem);
    res.redirect('/list'); 
});

app.get('/list', (req, res) => {
    res.send(`<h1>Shopping List</h1>
              <ul>${shoppingList.map(item => `<li>${item.item} - ${item.amount}</li>`).join('')}</ul>`);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
