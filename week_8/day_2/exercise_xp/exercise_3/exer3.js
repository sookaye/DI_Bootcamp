const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

let combine = epic.reduce(function (accumulator, curValue) {
    return `${accumulator} ${curValue}`
  }, '');
console.log(combine);