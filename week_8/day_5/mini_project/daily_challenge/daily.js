function isAnagram(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCount = {};
  
    for (let char of str1) {
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    for (let char of str2) {
      if (!charCount[char]) {
        return false;
      }
      charCount[char]--;
    }
  
    return true;
  }

console.log(isAnagram("Astronomer", "Moon starer")); 
console.log(isAnagram("School master", "The classroom")); 
console.log(isAnagram("The Morse Code", "Here come dots")); 
console.log(isAnagram("A gentleman", "Elegant man")); 
console.log(isAnagram("hello", "world")); 