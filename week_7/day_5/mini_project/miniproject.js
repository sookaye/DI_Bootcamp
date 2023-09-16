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
    {
      id: 4,
      author: 'Jaisan',
      quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.'
    }
]

// generate quote
const generateQuote = () => {
  let randomNum = Math.floor(Math.random() * quotes.length);
  let quoteSection = document.getElementById('quote-section');
  quoteSection.innerHTML = `
  <p>Quote: ${quotes[randomNum].quote}</p>
  <p>Author: ${quotes[randomNum].author}</p>
  `
}

// add quote
const addQuote = (quote, author) => {
  let quoteObj = {
    id: quotes.length,
    author: author,
    quote: quote
  }
  quotes.push(quoteObj);
}

// number of characters
const numChars = () => {
  let quoteSection = document.getElementById('quote-section');
  let quote = quoteSection.querySelector('p:first-of-type').innerText;
  let numChars = quote.length;
  alert(`Number of characters: ${numChars}`);
}

// number of characters (excluding spaces)
const numCharsNoSpace = () => {
  let quoteSection = document.getElementById('quote-section');
  let quote = quoteSection.querySelector('p:first-of-type').innerText;
  let numCharsNoSpace = quote.replace(/\s/g, '').length;
  alert(`Number of characters (excluding spaces): ${numCharsNoSpace}`);
}

// number of words
const numWords = () => {
  let quoteSection = document.getElementById('quote-section');
  let quote = quoteSection.querySelector('p:first-of-type').innerText;
  let numWords = quote.split(' ').length;
  alert(`Number of words: ${numWords}`);
}

// like quote
const likeQuote = () => {
  let quoteSection = document.getElementById('quote-section');
  let author = quoteSection.querySelector('p:last-of-type').innerText;
  let index;
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].author === author) {
      index = i;
    }
  }
  if (quotes[index].likes) {
    quotes[index].likes += 1;
  } else {
    quotes[index].likes = 1;
  }
  alert(`This quote has ${quotes[index].likes} likes!`);
}

// filter quotes
let currentIndex;
const filterQuotes = (author) => {
  let quoteSection = document.getElementById('quote-section');
  let index;
  for (let i = 0; i < quotes.length; i++) {
    if (quotes[i].author === author) {
      index = i;
    }
  }
  currentIndex = index;
  quoteSection.innerHTML = `
  <p>Quote: ${quotes[index].quote}</p>
  <p>Author: ${quotes[index].author}</p>
  `
}

// previous quote
const previousQuote = () => {
  let quoteSection = document.getElementById('quote-section');
  if (currentIndex > 0) {
    currentIndex--;
    quoteSection.innerHTML = `
    <p>Quote: ${quotes[currentIndex].quote}</p>
    <p>Author: ${quotes[currentIndex].author}</p>
    `
  }
}

// next quote
const nextQuote = () => {
  let quoteSection = document.getElementById('quote-section');
  if (currentIndex < quotes.length - 1) {
    currentIndex++;
    quoteSection.innerHTML = `
    <p>Quote: ${quotes[currentIndex].quote}</p>
    <p>Author: ${quotes[currentIndex].author}</p>
    `
  }
}

// event listeners
document.getElementById('generate-quote').addEventListener('click', generateQuote);
document.getElementById('add-quote-btn').addEventListener('click', (e) => {
  e.preventDefault();
  let quote = document.querySelector('input[name="quote"]').value;
  let author = document.querySelector('input[name="author"]').value;
  addQuote(quote, author);
});
document.getElementById('num-chars-btn').addEventListener('click', numChars);
document.getElementById('num-words-btn').addEventListener('click', numWords);
document.getElementById('num-chars-btn-no-space').addEventListener('click', numCharsNoSpace);
document.getElementById('like-quote-btn').addEventListener('click', likeQuote);
document.getElementById('filter-btn').addEventListener('click', (e) => {
  e.preventDefault();
  let author = document.querySelector('input[name="author"]').value;
  filterQuotes(author);
});
document.getElementById('previous-btn').addEventListener('click', previousQuote);
document.getElementById('next-btn').addEventListener('click', nextQuote);