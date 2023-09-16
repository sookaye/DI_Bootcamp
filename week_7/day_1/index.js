function isPositive(element) {
    return element >= 0;
  }
  
  let arr = [1, 4, 82, 45, 6]
  console.log(arr.every(isPositive)); 

  let arr2 = [11, 12, 13, 14, 15]
console.log(arr2.every(element => element > 10)); 

function isCanine(element, index, arr) {
    console.log("Checking if " + arr[index] + " is a canine.")
    return (element == "dog" || element == "doggo")
  }
  
  let arr3 = ["dog", "cat", "doggo"]
  console.log(arr3.every(isCanine)); 

  var myarray = [1, 3, 5, 2, 4];
var check = myarray.includes(2);
console.log(check);