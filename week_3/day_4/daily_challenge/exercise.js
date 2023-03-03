let sentence = 'The movie is not just that bad, I like it';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');
let changer = 'good';

console.log(wordNot);
console.log(wordBad);

if (wordNot < wordBad) {
  let temp = sentence.substring(wordNot,wordBad +3);
  console.log(temp)
  console.log(sentence.replace(temp, changer));
} else {
 console.log(sentence);
}
////////////////