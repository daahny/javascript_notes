// Comment
/* Multi-line comment: option-shift-a */

// console provides access to a browser's debugging console
/* 
string      - string
number      - any number
bool        - bool
null        - absence of a value
undefined   - also represents absence of a value, different use than null
symbol      - symbol, a unique identifier
object      - object
*/

console.log('String')
console.log('String'.length);
console.log('string'.toUpperCase());
console.log('    trim   '.trim());
console.log(Math.floor(Math.random()*100) + Math.ceil(43.8));



// Variables
var before_ES6 = true;

// The following 2 lines are identical
let variableOne = undefined;
let variableTwo;

// TypeError if attempted to change
const unchangeable = true;



// String interpolation (insertion of something (of a different nature) into something else)
let cool = 'cool';
console.log(`backticks are ${cool}`);


// Finding variable type
console.log(typeof cool);
console.log(typeof unchangeable);

