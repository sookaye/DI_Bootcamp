//Exercise 1 : Evaluation
5 >= 1
console.log(5 >= 1);
//true, 5 is greater than 1
//true
0 === 1
console.log(0 === 1);
//false, 0 is not strictly equal to 1
//false
4 <= 1
console.log(4 <= 1);
//false, 4 is not less than 1
//false
1 != 1
console.log(1 != 1);
//false, 1 is not equal to 1
//false
"A" > "B"
console.log("A" > "B");
//false, a is not greater than B
//false
"B" < "C"
console.log("B" < "C");
//true, c is greater than b
//true
"a" > "A"
console.log("a" > "A");
//true, a is greater than A
//true
"b" < "A"
console.log("b" < "A");
//false, b is not greater than A
//false
true === false
console.log(true === false);
//false, true is not strictly equal to false
//false
true != true
console.log(true != true);
//false, true is not equal to true
//false

// Exercise 2 : Ask For Numbers
let a = [2,3]
console.log(a[0]+a[1]);

//Exercise 3 : Find Nemo
let text = 'I love the movie named Nemo';
console.log(text.substr(23, 4));
console.log('I found Nemo at',text.search('Nemo'));

//Exercise 4 : Boom
let fred = prompt('what is your age');

if (fred > 2) {
  alert('Boom');
} else if (fred % 2) {
  alert('Boooom')
} else {
  alert('go home');
};
