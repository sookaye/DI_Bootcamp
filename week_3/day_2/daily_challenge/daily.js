const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

fruits.splice(0,2);
console.log(fruits);

fruits.sort();
console.log(fruits);

fruits.push('kiwi');
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.reverse();
console.log(fruits);

const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);


string = "A quick brown fox" //string to be split
array_of_strings = string.split(" ") //The split() function 

console.log(string) //note that the split function doesn't change the original string
console.log(array_of_strings)

console.log('To be or not to be'.indexOf('To'));
console.log('To be or not to be'.indexOf(' '));
console.log('To be or not to be'.indexOf('o', 2));
console.log('To be or not to be'.indexOf('be', 4));
console.log('To be or not to be'.indexOf('to'));
console.log('To be or not to be'.indexOf('B'));
console.log('To be or not to be'.indexOf('', 9));
