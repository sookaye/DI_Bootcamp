const results = [1,2,3,4];

const allTruthy = (...results) => {
    for (let result of results) {
      if (!result) return false;
    }
    return true;
  }
console.log(allTruthy(1));
console.log(allTruthy(0));

