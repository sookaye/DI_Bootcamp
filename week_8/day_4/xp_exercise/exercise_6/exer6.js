// Evaluate these (ie True or False)

// [2] === [2]  // false
// {} === {} //false

const object1 = { number: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { number: 5};

object1.number = 4;
console.log(object2.number) // 4 the last object 1 will dominate the result
console.log(object3.number) //  4 same as it is pointing 
console.log(object4.number) // 5  straight forward