// Promise.all is a method that takes an array of promises as input and returns a new promise. 
//It waits for all the promises in the array to resolve or reject, and then resolves with an array of the resolved values.

const promise1 = Promise.resolve(3); // Create a promise that immediately resolves with the value 3.
const promise2 = 42; // Create a resolved promise with the value 42.
const promise3 = new Promise((resolve, reject) => {
// Create a promise that resolves with the value 'foo' after  3 seconds.
setTimeout(resolve, 3000, 'foo');
});

// We have three promises: promise1, promise2, and promise3.
// promise1 and promise3 are asynchronous promises, while promise2 is a synchronous value.

// When Promise.all is called with an array of promises, it starts executing all the promises concurrently.
// In this case, promise1 and promise2 are already resolved, so their values are immediately available.
// promise3 is an asynchronous promise, so it starts a timer and will resolve with the value 'foo' after 3 seconds.

// Promise.all waits for all the promises to settle (either resolve or reject) and returns a new promise.
// The new promise resolves with an array of the resolved values in the same order as the input promises.

Promise.all([promise1, promise2, promise3])
.then((values) => {
console.log(values);
// The output will be: [3, 42, 'foo']
})
.catch((error) => {
// If any of the promises in the array are rejected, the catch block will be executed.
console.log('An error occurred:', error);
});

// In this case, all promises are resolved successfully, so the then block is executed.
// The resolved values of promise1, promise2, and promise3 are [3, 42, 'foo'], respectively.
// Therefore, the output of the console.log will be an array containing these values: [3, 42, 'foo'].