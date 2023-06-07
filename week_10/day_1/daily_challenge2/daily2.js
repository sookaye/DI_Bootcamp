function toJs(morseJson) {
    return new Promise((resolve, reject) => {
      const morseObject = JSON.parse(morseJson);
      if (Object.keys(morseObject).length === 0) {
        reject(new Error('Morse JavaScript object is empty.'));
      } else {
        resolve(morseObject);
      }
    });
  }
  
  function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
      const userInput = prompt('Enter a word or sentence:');
      const morseTranslation = [];
      const morseObject = morseJS;
  
      for (let i = 0; i < userInput.length; i++) {
        const char = userInput[i].toUpperCase();
        if (morseObject.hasOwnProperty(char)) {
          morseTranslation.push(morseObject[char]);
        } else {
          reject(new Error(`Character '${char}' doesn't exist in Morse JavaScript object.`));
        }
      }
  
      resolve(morseTranslation);
    });
  }
  
  const morseJsonString = '{"A":".-","B":"-...","C":"-.-.","D":"-..","E":".","F":"..-.","G":"--.","H":"....","I":"..","J":".---","K":"-.-","L":".-..","M":"--","N":"-.","O":"---","P":".--.","Q":"--.-","R":".-.","S":"...","T":"-","U":"..-","V":"...-","W":".--","X":"-..-","Y":"-.--","Z":"--..","0":"-----","1":".----","2":"..---","3":"...--","4":"....-","5":".....","6":"-....","7":"--...","8":"---..","9":"----."}';
  
  toJs(morseJsonString)
    .then((morseJS) => {
      return toMorse(morseJS);
    })
    .then((morseTranslation) => {
      console.log('Morse Translation:', morseTranslation);
    })
    .catch((error) => {
      console.error('Error:', error.message);
    });
  
