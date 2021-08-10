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
    if (someCondition) {
        resolve('I resolved!');
    } else {
        reject('I rejected!'); 
    }
  }

const myFirstPromise = new Promise(executorFunction);