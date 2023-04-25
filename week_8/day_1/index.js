const object = ['gars', 'vari', 'deco', 'yelp'];

const even = object.filter((n, i) => {
    console.log(n, i)
    if (n % 2 === 0) {
        return true
    }
})

let array = [];
function reduce(array, combine, start) { //pass the array, pass the way of combining each element of the array with the current value
    let current = start;
    for (let element of array) {
        current = combine(current, element); 
    }
    return current; // return the value
}

console.log();

/// exercise //
let party = [
    {
      desert: 'Chocolate Mousse',
      calories: 30,
    },
    {
      desert: 'Apple Pie',
      calories: 15,
    },
    {
      desert: 'Croissant',
      calories: 50,
    },
    {
      desert: 'Strawberry Icecream',
      calories: 5,
    },
  ]

  const totalValue = party.reduce((acc, item) => {
    if (item.desert !== 'Apple Pie') {
        return acc + item.calories
    } else {
        return acc
    }
  },0);

  console.log(totalValue)
  