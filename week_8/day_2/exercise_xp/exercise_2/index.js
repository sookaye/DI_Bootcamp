const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
            ];

const welcomeStudents = users.map((n) => `Hello ${n.firstName}`);
console.log(welcomeStudents);

const fullStackResident = users.filter(word => word.role === "Full Stack Resident");
console.log(fullStackResident);

const fullStackResident2 = fullStackResident.map((n) => `${n.lastName}`);
console.log(fullStackResident2);

let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
let count = 1;
for(let key in myObj){
  console.log(`The ${count} key is : ${key} The ${count} value is : ${myObj[key]}`);
  count++;
}
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

let date = document.getElementById('datetime');
date.addEventListener("change",function(event){
    let date = new Date(event.target.value);
    console.log(date);
  }
);

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log('toString',dateString);

let day = now.getDay();
console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);

console.log('getMonth',now.getMonth() + 1)
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log('getDate',now.getDate())
// gives us the number for the dat of the month.

console.log('getFullYear',now.getFullYear())
// returns the 4 digit version of the year.

console.log('getHours',now.getHours())
// gives us a number from 0 to 23,
//which corresponds to midnight and 11pm.

console.log('getMinutes',now.getMinutes())
// returns the minutes of the hour from 0 to 59.

console.log('getSeconds',now.getSeconds())
// returns the seconds of the minute from 0 to 59.

console.log('getMilliseconds',now.getMilliseconds())
// returns a number from 0 to 999.

console.log('getTime',now.getTime())
// gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = anotherDay - today;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);
console.log(Math.floor(days));
