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
let key = 2;
switch (key) {
  case 1:
   // console.log('Monday');
    break;
case 2 :
  console.log('Tuesday');
  break;
  default:
    break;
}
console.log(3 && 'Orange');
console.log('' || 'Orange');
console.log(true || 0);
console.log(undefined || null);

console.log(0 && 'Orange');
console.log('Orange' && 'Orange');
console.log(true && null);
console.log('Apple' && 'Orange');