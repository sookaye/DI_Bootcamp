
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Ashley!');
});

app.get('/home', (req, res) => {
    const home = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTTP Request Process</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
            }
    
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
    
            .circle {
                width: 150px;
                height: 150px;
                background: #3498db;
                border-radius: 50%;
                position: relative;
                margin: 0 50px;
            }
    
            .circle:before {
                content: attr(data-label);
                position: absolute;
                top: -30px;
                left: 0;
                right: 0;
                font-size: 16px;
                color: #fff;
            }
    
            .arrow {
                position: absolute;
                top: 70px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;
                border-bottom: 20px solid #3498db;
            }
    
            .line {
                position: absolute;
                height: 2px;
                background: #333;
                top: 50%;
                left: 50%;
                transform: translateX(-50%);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="circle" data-label="Client">
                <div class="arrow"></div>
            </div>
            <div class="line"></div>
            <div class="circle" data-label="Server">
                <div class="arrow"></div>
            </div>
            <div class="line"></div>
            <div class="circle" data-label="Response">
                <div class="arrow"></div>
            </div>
        </div>
    </body>
    </html>`;
    res.send(home);
});

app.get('/about', (req, res) => {
    const aboutUs =`
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About US</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #38a13c, #673AB7);
            color: #fff;
            overflow: hidden;
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
        <div class="welcome-message">About US</div>
        <div class="sub-message">we are operating since 1999</div>
        <a href="/user/:name/:age" class="btn">Learn More</a>
    </div>
</body>
</html>  
`;
    res.send(aboutUs);
});
//Get employee with name and age
app.get('/employee', (req, res) => {
    console.log(req.query);
    console.log(req.query.name);
    console.log(req.query.age);
    res.send('Tutorial about parsing data!' + req.query);
});

app.get('/user/:id', (req, res) => {
    if(req.params.id == 1) {
        res.send("WELCOME");
    }
    else {
        res.send("go home");
    }
    res.send('Tutorial about parsing data!'  + req.params.id);
});

app.get('/user/:name/:age', (req, res) => {
    const welcomeMessage = `
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
            <div class="welcome-message">Welcome to Our Website</div>
            <div class="sub-message">Discover something amazing.</div>
            <a href="/about" class="btn">Get Started</a>
        </div>
    </body>
    </html>
`;

    if(req.params.name == "Ashley" && req.params.age == 27) {
        res.send(welcomeMessage);
    }
    else {
        res.send("Wrong username");
    }
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});

