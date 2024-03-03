const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

const usersArray = [];

app.get('/loginForm', (req, res) => {
    res.sendFile(__dirname + '/loginForm.html');
});

app.get('/registerForm', (req, res) => {
    res.sendFile(__dirname + '/registerForm.html');
});

app.post('/register', (req, res) => {
    const { name, lastName, email, username, password } = req.body;
    
    if (usersArray.some(user => user.username === username || user.password === password)) {
        return res.send('error1');
    }

    const user = {
        id: usersArray.length + 1,
        name,
        lastName,
        email,
        username,
        password
    };

    usersArray.push(user);
    res.send('register');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = usersArray.find(u => u.username === username && u.password === password);

    if (user) {
        res.send('login');
    } else {
        res.send('error2');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
