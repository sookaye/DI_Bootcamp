// The World Translator
let language = prompt ("Which language do you speak?");
language = language.toLowerCase();

switch (language) {
    case "french":
        console.log ("Bonjour");
        break;
    case "english":
        console.log ("Hello");
        break;
    case "hebrew":
        console.log ("Shalom");
        break;
    default:
        console.log ("01110011 01101111 01110010 01110010 01111001");
}

//Exercise 2 : The Grade Assigner
var grade = prompt("What is your grade?");

if (grade > 90) {
 console.log("A");
} else if (grade >= 80 && grade <= 90) {
 console.log("B");
} else if (grade >= 70 && grade < 80) {
 console.log("C");
} else if (grade < 70) {
 console.log("D");
}
//Exercise 3 : Verbing
let verb = prompt("Please enter a verb: ");

if (verb.length >= 3 && !verb.endsWith("ing")) {
  verb += "ing";
} else if (verb.length >= 3 && verb.endsWith("ing")) {
  verb += "ly";
}

console.log(verb);