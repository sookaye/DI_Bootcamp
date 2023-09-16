const calculateTotalAndAverage = (numbers) => {
  const total = numbers.reduce((sum, num) => sum + num, 0);
  const average = total / numbers.length;
  return { total, average };
};

const numbers = [5, 3, 8, 10, 2];
const result = calculateTotalAndAverage(numbers);
console.log(result.total);    // Output: 28
console.log(result.average);  // Output: 5.6

///
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchData() {
  console.log('Fetching data...');
  await delay(2000); // Simulate an asynchronous operation with a delay of 2 seconds
  console.log('Data fetched!');
  return { message: 'Hello, World!' };
}

async function processData() {
  try {
    const data = await fetchData();
    console.log('Processing data...');
    await delay(1000); // Simulate another asynchronous operation with a delay of 1 second
    console.log(`Processed data: ${data.message}`);
  } catch (error) {
    console.error('Error:', error);
  }
}

processData();


//module

// Require // import

//-- Local
/// -- Core
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

const port = 3000;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



