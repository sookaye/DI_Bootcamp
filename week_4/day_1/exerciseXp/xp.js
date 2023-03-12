///Exercise 1 : List Of People
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2,2,'Jason');
console.log(people);
people.splice(3,0,'Ashley');
console.log(people);
console.log(people.indexOf('Mary'));
const peopleCopy = people.slice(1,4);
console.log(peopleCopy);
console.log(peopleCopy.indexOf('Foo')); //Its because it does not exist.
///////
const last = people[3];
console.log(last);

/**Part II - Loops
what does this mean (let i = 0; i < people.length; i++)
This is the syntax for a for loop. The let keyword creates a new variable (in this case, i) and assigns 
it a value of 0. The condition (i < people.length) checks the value of i each loop and the loop will 
only continue if it is less than the length of the people array. The i++ part increases the value of i 
by one each loop. This ensures that the loop will eventually end after it has gone through every item 
//in the array.**/

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
  };
  for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Jason") {
      break;
    }
  }

  //Exercise 2 : Your Favorite Colors
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

  for (let i = 0; i < colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}.`);
  }
///Bonus
  const suffix = ['st', 'nd', 'rd', 'th', 'th']

  for (let i = 0; i < suffix.length; i++) {
    if (i === 0) {
      console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}.`);
    } else if (i === 1) {
      console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}.`);
    } else if (i === 2) {
      console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}.`);
    } else {
      console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}.`);
    }
  }

 // Exercise 3 : Repeat The Question
let number = "Please enter a number:";
console.log(typeof number);

while (Number(number) < 10) {
    number = prompt("Please enter a new number: ");
    console.log(typeof number);
  }

  ///// Exercise 4 : Building Management
  const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors); 
console.log(building.numberOfAptByFloor.firstFloor+building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1],building.numberOfRoomsAndRent.dan[0]);

if (building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1] > building.numberOfRoomsAndRent.dan[1]) {
    console.log(building.numberOfRoomsAndRent.dan[1] = 1200);
}
/// Exercise 5 : Family
let family = {
  father: 'John',
  mother: 'Sara',
  daughter: 'Emma',
  son: 'Jack'
};
for (const key in family) {
  if (Object.hasOwnProperty.call(family, key)) {
      console.log(key)
  }
}
for (const key in family) {
  if (Object.hasOwnProperty.call(family, key)) {
    console.log(family[key]);
    
  }
}
////Exercise 6 : Rudolf
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
for (const key in details) {
  if (Object.hasOwnProperty.call(details, key)) {
    console.log(key, details[key]);
  }
}
///////Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let secretsociety = names.toString();
console.log(secretsociety.toLocaleUpperCase());
for (let i = 0; i < names.length; i++) {
  let secretsociety = names[i][0];
console.log(secretsociety.join());
}

