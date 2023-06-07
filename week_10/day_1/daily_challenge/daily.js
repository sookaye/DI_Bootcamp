function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
      const allStrings = words.every(word => typeof word === 'string');
      if (allStrings) {
        const capitalizedWords = words.map(word => word.toUpperCase());
        resolve(capitalizedWords);
      } else {
        reject(new Error('The array contains non-string values.'));
      }
    });
  }
  
  function sortWords(words) {
    return new Promise((resolve, reject) => {
      if (words.length > 4) {
        const sortedWords = words.sort();
        resolve(sortedWords);
      } else {
        reject(new Error('The array length is not greater than 4.'));
      }
    });
  }
  
  //in this example, the catch method is executed
makeAllCaps([1, "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, the catch method is executed
makeAllCaps(["apple", "pear", "banana"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result))
.catch(error => console.log(error))

//in this example, you should see in the console, 
// the array of words uppercased and sorted
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
.then((arr) => sortWords(arr))
.then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
.catch(error => console.log(error))