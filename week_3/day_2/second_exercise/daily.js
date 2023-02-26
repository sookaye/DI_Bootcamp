//Exercise 1: Your Favorite Food
const favoriteFood = 'Chocolate';
const fovouriteMeal = 'Dinner';
console.log('I eat ', favoriteFood, 'at every', fovouriteMeal);

//Exercise 2: Series

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
console.log(myWatchedSeriesLength)
const myWatchedSeriesSentence = `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}, `;
console.log('I watched 3 series :',myWatchedSeriesSentence);

//Part2
myWatchedSeries.splice(2,1,'Friends');
console.log(myWatchedSeries);
myWatchedSeries.splice(3,0,'Baki');
console.log(myWatchedSeries);
myWatchedSeries.unshift('Tale');
console.log(myWatchedSeries);
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries);
console.log(myWatchedSeries[1]);
console.log(myWatchedSeries);

//Exercise 3 : The Temperature Converter
const cel = 1;
const far = cel/5 * 9 + 32;
console.log(cel*2 + far);

//Exercise 4 : Guess The Answers #1
let c;
let a = 34;
let b = 21;

console.log(a+b);
//55, The total value 34 + 21 will appear
// 55

a = 2;
console.log(a+b)
// 2 + 21 = 23
// 23

// Value of c = undefine

console.log(3 + 4 + '5');
// predicton = 75, the string will be added beside, unless we substrack 
// Actual = 75

//Exercise 5 : Guess The Answers #2
typeof(15)
console.log(typeof(15));
// Prediction: Number
// Actual: Number

typeof(5.5)
console.log(typeof(5.5));
// Prediction: Number
// Actual:  Number

typeof(NaN)
console.log(typeof(NaN));
// Prediction: Number
// Actual: Number

typeof("hello")
console.log(typeof("hello"));
// Prediction: string
// Actual: string

typeof(true)
console.log(typeof(true));
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
console.log(typeof(1 != 2));
// Prediction: boolean
// Actual: boolean

"hamburger" + "s"
console.log("hamburger" + "s");
// Prediction: Hamburgers, the string will join
// Actual: Hamburgers
 
"hamburgers" - "s"
console.log("hamburgers" - "s");
// Prediction: NaN
// Actual: NaN

"1" + "3"
console.log("1" + "3");
// Prediction: 13
// Actual: 13

"1" - "3"
console.log("1" - "3");
// Prediction: -2, the numbers inside the string will be substracted otherwise NaN
// Actual: -2

"johnny" + 5
console.log("johnny" + 5);
// Prediction: johnny5, the 2 element will join
// Actual: johnny5

"johnny" - 5
console.log("johnny" - 5);
// Prediction: NaN johnny is not a number 
// Actual: NaN

99 * "hello"
console.log(99 * "hello");
// Prediction: NaN, Hello is not a Number 
// Actual: NaN

1 != 1
console.log(1 != 1);
// Prediction: false, 1 ! will not be equal to 1
// Actual: false

1 == "1"
console.log(1 == "1");
// Prediction:  true, the ouput will be 1
// Actual: true

1 === "1"
console.log(1 === "1");
// Prediction: true, the ouput will be 1
// Actual: false

//Exercise 6 : Guess The Answers #3
5 + "34"
console.log(5 + "34");
// Prediction: 534, 34 is a string
// Actual: 534

5 - "4"
console.log(5 - "4");
// Prediction: 1
// Actual: 1

10 % 5
console.log(10 % 5);
// Prediction: 0.5
// Actual: 0

5 % 10
console.log(5 % 10);
// Prediction: 2
// Actual: 5

"Java" + "Script"
console.log("Java" + "Script");
// Prediction: JavaScript
// Actual: JavaScript

" " + " "
console.log(" " + " ");
// Prediction:  
// Actual:  

" " + 0
console.log(" " + 0);
// Prediction: 0 
// Actual: 0

true + true
console.log(true + true);
// Prediction: true
// Actual: 2

true + false
console.log(true + false);
// Prediction: false
// Actual: 1

false + true
console.log(false + true);
// Prediction: 1, i based on the previous right answers
// Actual: 1

false - true
console.log(false - true);
// Prediction: -1, i based on the previous right answers
// Actual: -1

!true
console.log(!true);
// Prediction: no idea
// Actual: false

3 - 4
console.log(3 - 4);
// Prediction: -1, simple substraction
// Actual: -1

"Bob" - "bill"
console.log("Bob" - "bill");
// Prediction: NaN
// Actual: NaN