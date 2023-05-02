const array = [[1],[2],[3],[[[4]]],[[[5]]]];

const modifiedArray = array.map((item) => {
    if (Array.isArray(item) && item.length === 1) {
      return item[0];
    }
    return item;
  }); 

  console.log(modifiedArray.flat());

const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const flattenedGreeting = greeting.flatMap(subarray => subarray);
const greetingString = flattenedGreeting.join(" ");

console.log(greetingString); 

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
let result = trapped;

while (Array.isArray(result)) {
  result = result[0];
}
result = [result];
console.log(result);