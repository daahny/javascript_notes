// async functions perform asynchronous operations.
// they always return a promise
//      - If there’s nothing returned from the function, 
//        it will return a promise with a resolved value of undefined.
//      - If there’s a non-promise value returned from the function, 
//        it will return a promise resolved to that value.
//      - If a promise is returned from the function, it will simply return that promise


// await halts the executing async function until a resolved value is returned from another Promise,
// which is returned from another function


// Example:
// Native promise syntax
function nativeConcurrency() {
    let p = new Promise((resolve, reject) => {resolve('success');});
    p.then(resolvedValueOfPromise => {console.log('success handler'); return new Promise((resolve, reject) => {resolve('success');})})
    .then(/* second promise success handler, etc. */)
}

nativeConcurrency();

// async...await syntax
async function aaConcurrency() {
    let a = await firstPromise();/* some function that returns a promise */
    console.log('the first promise has returned');

    let b = await secondPromise();/* some function that returns another promise */
    console.log('the second promise has returned');
}
aaConcurrency();