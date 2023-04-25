const quotes = [
    {
      id: 0,
      author: 'Ashley',
      quote: 'If you do not change direction, you may end up where you are heading.',
      likes: 0
    },
    {
      id: 1,
      author: 'Jean Luc',
      quote: 'Life is what happens when you’re busy making other plans.',
      likes: 0
    },
    {
      id: 2,
      author: 'previn',
      quote: 'Life is either a daring adventure or nothing at all.',
      likes: 0
    },
]

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const addQuoteForm = document.getElementById("add-quote-form");
const quoteInput = document.getElementById("quote-input");
const authorInput = document.getElementById("author-input");
const charCountBtn = document.getElementById("char-count-btn");
const charCountNoSpaceBtn = document.getElementById("char-count-no-space-btn");
const wordCountBtn = document.getElementById("word-count-btn");
const likeBtn = document.getElementById("like-btn");

let currentQuote = null;

function generateRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length); 
    } while (quotes[randomIndex] === currentQuote); 
    currentQuote = quotes[randomIndex]; 
    quoteElement.textContent = currentQuote.quote; 
    authorElement.textContent = "- " + currentQuote.author; 
}

function addQuote(event) {
    event.preventDefault(); 
    const quote = quoteInput.value;
    const author = authorInput.value;
    const id = quotes.length; 
    const newQuote = { id, author, quote, likes: 0 };
    quotes.push(newQuote); 
    quoteInput.value = ""; 
    authorInput.value = ""; 
}

function getCharWithSpace() {
    if (currentQuote) {
    const charCount = currentQuote.quote.length;
    alert(`Number of Characters (with space): ${charCount}`);
    }
}

function getCharWithoutSpace() {
    if (currentQuote) {
    const charNoCount = currentQuote.quote.length;
    alert(`Number of Characters (without space): ${charNoCount}`);
    }
}

function wordCount() {
  if (currentQuote) {
    const wordCounts = currentQuote.quote.length;
    alert(`Number of words: ${wordCounts}`);
    }
}

generateBtn.addEventListener("click", generateRandomQuote);
generateRandomQuote();

charCountBtn.addEventListener('click', getCharWithSpace);
charCountNoSpaceBtn.addEventListener('click', getCharWithoutSpace);
wordCountBtn.addEventListener('click', wordCount);
