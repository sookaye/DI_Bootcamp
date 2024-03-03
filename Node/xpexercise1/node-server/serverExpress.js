// serverExpress.js
const express = require('express');
const app = express();
const PORT = 3006;

app.get('/', (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
