
// Exercise 1
// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }

//   console.log('File Content:', data);
// });


// Exercise 2
// const fs = require('fs');

// const content = 'bla bla ';

// const fileName = 'newfile.txt';

// fs.writeFile(fileName, content, 'utf8', (err) => {
//   if (err) {
//     console.error('Error writing to file:', err);
//     return;
//   }

//   console.log(`File "${fileName}" has been created and written to successfully.`);
// });


// exercise 3
const fs = require('fs');

const additionalContent = '\nBuy orange juice.';

const fileName = 'newfile.txt';

fs.appendFile(fileName, additionalContent, 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }

  console.log(`Text appended to the file "${fileName}" successfully.`);
});
