// hoisting: a feature in javascript that allows functions to be called before their defined in the script
this_function_is_reachable();

function this_function_is_reachable() {

}


// default values
function funct(item1 = 'milk', item2 = 'bread') {

}



// returns
// by default, functions return undefined
function returns_undefined() {
    let variable = 'x';
}

// prints undefined
console.log(returns_undefined())



// function expressions
// weird, and no benefit? does not support hoisting
// anonymous function is a function with no name
const doSomething = function(a, b, c) {

}



// arrow functions
// one statement, zero params.
const helloZero = () => `Hello!`;
// one statement. notice, for one parameter functions, the paranthesis are not required
const helloOne = name => `Hello ${name}!`;
// more than one statement, parantehsis and brackets are required
const helloTwo = (name) => {
    console.log(`Hello`);
    return `${name}!`;
}



// remember, this is a paramaterless function that returns 'Hello'
const returnsHello = () => 'Hello';