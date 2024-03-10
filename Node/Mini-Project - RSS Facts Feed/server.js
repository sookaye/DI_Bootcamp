const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const axios = require('axios');
const Parser = require('rss-parser');
const ejs = require('ejs');
const path = require('path');

const app = express();
const parser = new Parser();

const viewsPath = path.join(__dirname, 'public/pages');
app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/', async (req, res) => {
    try {
        let feed = await parser.parseURL('https://thefactfile.org/feed/');
        res.render('index', { posts: feed.items });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.get('/search', (req, res) => {
    res.render('pages/search');
});

app.post('/search/title', (req, res) => {
    const title = req.body.title; 
    res.render('pages/search', { searchedTitle: title });
});

app.post('/search/category', (req, res) => {
    const category = req.body.category; 
    res.render('pages/search', { searchedCategory: category });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

