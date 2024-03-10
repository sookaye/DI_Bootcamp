const fs = require('fs');

fs.readFile('RightLeft.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const finalPosition = calculateFinalPosition(data);
  console.log('Final Position:', finalPosition, 'steps to the right.');

  const stepsToMinusOne = calculateStepsToTarget(data, -1);
  console.log('Steps to reach position -1:', stepsToMinusOne);
});

function calculateFinalPosition(symbols) {
  let position = 0;

  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
    } else if (symbol === '<') {
      position--;
    }
  }

  return position;
}

function calculateStepsToTarget(symbols, targetPosition) {
  let position = 0;
  let steps = 0;

  for (const symbol of symbols) {
    if (symbol === '>') {
      position++;
    } else if (symbol === '<') {
      position--;
    }

    steps++;

    if (position === targetPosition) {
      break;
    }
  }

  return steps;
}
