// The event loop in JS is the secret to the illusion of concurrency
// The event loop describes a loop that occurs among data structures and APIs.

// The call stack is a stack that holds the function calls for a single operation
// The event/message queue is a queue that holds operations to be completed
// When an operation in the call stack has completed and there are no more function calls,
// the event queue will send the oldest event/message/operation to the call stack for processing

// The event loopo also has runtime environment APIs (the web API or Node API) to server as another thread.
// A JS script is a set of operations running in a single thread. However, when JS encounters an operation
// that needs/should/can be done asynchronously, it will send that operation to the API for processing.
// When the API finishes, it will send this task back to the event queue.
// https://www.educative.io/edpresso/what-is-an-event-loop-in-javascript
// Refer the event_loop.png for how the setTimeout function works and why the specified delay
// is a minimum value rather than a gauranteed value


// asynchronous operation - a task that runs concurrently with other tasks (on the side)

// A Promise object - represents the eventual outcome of an operation
// 1 of 3 states:
// 1: Pending - (Initial state), operation has not completed yet
// 2: Fulfilled - Operation completed and exits with a 'resolved value'
// 3: Rejected - Operation failed and has a reason for failure


// An asynchronous operation that has either been fulfilled or rejected is referred to as 'settled'

// Making a Promise object
// The Promise object takes an 'executor function' as an argument for the constructor
// The executor function starts the asynchronous operation and dictates how the promise settles
// The executor function has 2 functions as parameters: resolve() and reject()
// The JS interpreter will pass its own functions as arguments into the executor function

// if resolve() is invoked, status is changed to Fulfilled and the resolve value becomes the argument passed into resolve()
// if reject() is invoked, status is changed to Rejected and the rejection reason becomes the argument passed into reject()

const executorFunction = (resolve, reject) => {
    if (true) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  }

const myFirstPromise = new Promise(executorFunction);


// setTimeout() an asynchronous function provided by the Node api
setTimeout(() => console.log('it has been atleast 3 seconds'), 3000);


// .then() is a Promise method that determines the next action to take after the promise is settled
// it takes 2 callback functions (called handlers)
// the first handler is the success/onFulfilled handler for logic after a promise resolves
// the other handler is the failure/onRejected handler for logic after a promise rejects
// if an appropriate handler is not provided, .then() will return a Promise with the same settled value it had when it was passed

// Example
const inventory = {
    sunglasses: 9000,
    watermelons: 0
};

function exec(resolve, reject) {
    if (inventory.sunglasses > 0){
        console.log('we still got sunglasses');
        resolve('we still got sunglasses');
    } else {
        reject('nah we out of sunglasses');
    }
};

const promise = new Promise(exec);

function successHandler(resolvedValue) {
    console.log("success: " + resolvedValue);
}
function failureHandler(rejectedValue) {
    console.log(rejectedValue);
}

// .catch() is used for the failure handler to separate the handlers like so:
promise.then(successHandler).catch(failureHandler);


// Promise Chaining
// the .then() function returns a promise
// if the appropriate event handler is not provided, it will return a promise with 
// the same settled value as the promise it was called with
// The fact that .then() returns a Promise, we can change the return value and chain Promises
// to execute in sequence
// Note, since the first parameter is the successHandler, it is only called if the promise was successfull.

p1 = new Promise(exec);
p1.then((resolvedValue) => {new Promise(exec)})
  .then((resolvedValue) => {new Promise(exec)}, null);


// Promises.all()
// Achieve concurrency by accepting an array of promises to complete in no particular order
// If every promise resolves, Promise.all() will resolve with an array containing the resolve value from each promise
// If a single promise rejects, a single promise returns with the rejection reason


// Another example of promise chaining
let p2 = new Promise((resolve, reject) => {
    console.log('executor function invoked!');
    setTimeout(() => resolve(1), 1000);
});

p2.then((result) => {
    console.log('success handler invoked!');
    console.log('success handler invoked with the result \nof the previous promise! ' + result);
    return result * 2;
}).then((result) => {
    console.log('second success handler invoked!')
});

