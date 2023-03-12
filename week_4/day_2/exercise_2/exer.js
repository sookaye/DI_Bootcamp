const getMumAge = (myAge) => {
    const result = myAge * 2;
    return result;
}
let result = getMumAge(40);
console.log(result); 
///////////////daily challenge
let userInput = prompt("Please enter several words separated by commas: ");

let wordsArray = userInput.split(",");

console.log("*********");
for (let i = 0; i < wordsArray.length; i++) {
    console.log("*" + wordsArray[i] + " *");
}
console.log("*********");
