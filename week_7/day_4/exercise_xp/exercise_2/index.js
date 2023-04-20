const kgToGram = (valueKG) => {
    return valueKG * 1000;
}
console.log(kgToGram(10));

// Function declaration can be invoked before it's declared, 
// while function expression cannot be invoked before it's declared.

const kgToGram2 = (kgValue) => kgValue * 1000;
console.log(kgToGram2(15));
