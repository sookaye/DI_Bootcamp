///Exercise 1: Simple If/Else Statement
let x = 5;
let y = 2;

if (x > y) {
console.log('x is the biggest number');
} else {
console.log('y is the smallest number');
}

//////Exercise 2: Chihuahua
let newDog = 'Chihuahua';
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());
console.log(newDog.length);
if (newDog == 'Chihuahua') {
    console.log('I love Chihuahuas, it’s my favorite dog breed');
} else {
    console.log('I dont care, I prefer cats');
}

// ///////Even Or Odd
// let user = prompt("Enter a number: ");

// if(user % 2 == 0) {
//     console.log("The number is even.");
// }
// else {
//     console.log("The number is odd.");
// }

//////// Exercise 4: Group Chat
const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000"];
console.log(users.length);
if (users.length === 0) {
    console.log('no one is online');
} else if (users.length === 1) {
    console.log(`${users[0]} 'is online'`);
}else if (users.length === 2) {
    console.log(`${users[0]} and ${users[1]} are online`);
} else {
    const remaing = users.length - 2
    console.log(`${users[0]} and ${users[1]} are ${remaing} more online`);
}

switch (users.length){
    case 0:
        console.log('no one is online');
    break;

    case 1:
        console.log(`${users[0]} 'is online'`);
    break;

    case 2:
    break;

    default:
    break;
}