let words = prompt("Enter several words, separated by commas");

let wordArray = words.split(",");

let maxLength = 0;
for (let i = 0; i < wordArray.length; i++){
    if (wordArray[i].length > maxLength){
        maxLength = wordArray[i].length;
    }
}

console.log("*".repeat(maxLength + 1));
for (let i = 0; i < wordArray.length; i++){
    console.log("* " + wordArray[i].trim() + " ".repeat(maxLength - wordArray[i].length) + " *");
}
console.log("*".repeat(maxLength + 1));
///////////////
const sentence = 'Hello, world, in, a, frame, please';

