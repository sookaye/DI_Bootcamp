const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/users', (req, res) => {
  const user = { firstname: 'John', lastname: 'Doe' };
  res.json(user);
});

const PORT = process.env.PORT || 2000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
