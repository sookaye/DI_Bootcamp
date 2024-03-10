const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
  const user = { firstname: 'John', lastname: 'Doe' };
  res.json(user);
});


app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/`);
});

//execise2 route to server
app.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ userId });
  });
