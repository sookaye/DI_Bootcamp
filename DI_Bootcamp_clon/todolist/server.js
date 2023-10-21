
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 6060;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('client')); 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
