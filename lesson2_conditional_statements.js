// if else syntax

let bool = true;

if (bool) {
    console.log('True');
} else {
    console.log('False');
}


// comparison operators
// >
// <
// >=
// <=
// ===
// !==


// logical operators
// &&
// ||
// ! (condition)


// truthy and falsy
// truthy - anything non-falsy
if (true) {
    // do something
}
// falsy
if (false) { 
    // do something
} 
// falsy values: 0, empty strings ('' or ""), null, undefined, NaN (not a number)

// short circuit evaluation
// the second argument is executed or evaluated only if the first argument 
// does not suffice to determine the value of the expression

// The following code assigns userName the value of the falsy variable if it is not a falsy
// It is a falsy, so userName will be assigned 'default'
let falsy;
let userName = falsy || 'default';

// classic ternary operator
// condition ? if true, do this : otherwise, do this
falsy ? console.log("true") : console.log("false");


// switch statement
// break prevents other cases from being evaluated. 
// Note, other cases are evaluated even if the case before them is true
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}