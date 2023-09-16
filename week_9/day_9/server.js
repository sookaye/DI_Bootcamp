const express = require('express');
const app = express();
const port = 7070;

app.use(express.urlencoded({ extended: false }));
app.use(express.static('client'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html');
});

app.post('/submit', (req, res) => {
    const formData = req.body;
     console.log(formData);
    res.redirect('/result');
});

app.get('/result', (req, res) => {
let firstName = req.body.firstName;
let lastName = req.body.lastName;
    res.send(`
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome Message</title>
        <style>
            body {
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
                background: linear-gradient(45deg, #9C27B0, #2196F3);
                color: #fff;
                overflow: hidden;
                animation: backgroundAnimation .3s infinite alternate linear;
            }
            @keyframes backgroundAnimation {
                0% {
                    background-position: 0% 50%;
                }
                100% {
                    background-position: 100% 50%;
                }
            }
    
            .welcome-container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                text-align: center;
            }
    
            .welcome-message {
                font-size: 3.5em;
                margin-bottom: 20px;
                font-weight: 700;
            }
    
            .sub-message {
                font-size: 1.5rem;
                text-transform: none;
                letter-spacing: 3px;
            }
    
            .btn {
                display: inline-block;
                padding: 10px 20px;
                margin-top: 20px;
                background-color: #FFFFFF;
                color: #333;
                text-decoration: none;
                border: none;
                border-radius: 5px;
                transition: background-color 0.3s ease;
            }
    
            .btn:hover {
                background-color: #FFA07A;
            }
        </style>
    </head>
    <body>
        <div class="welcome-container">
            <div class="welcome-message">Your Account has been created</div>
        </div>
    </body>
    </html>
    `);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});