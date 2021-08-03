// iterators are methods called on arrays to manipulate elements and return values.
let fruits = ['banana', 'apple', 'orange', 'mango', 'kiwi'];


// forEach()
// accepts a call back function as an argument and executes the function for each item
// syntax 1
fruits.forEach(function(fruit) {console.log(fruit)});
// syntax 2
fruits.forEach(fruit => console.log(fruit));
// syntax 3
function print(element) {console.log(element)}
fruits.forEach(print);


// map()
// returns a new array of elements that are changed by the action set in the callback function
let fruitsNew = fruits.map(fruit => fruit.substring(0, 2));


// filter()
// returns a new array of elements that are filtered out of the original array according
// to a condition in the callback function (true/false)
let fruitsFiltered = fruits.filter(fruit => fruit.length < 6);


// findIndex()
// returns the index of the first element that matches a condition in the callback function
let appleIndex = fruits.findIndex(fruit => fruit === 'apple');


// reduce()
// uses an accumulator (a continually increasing value) 
// and a currentValue (the value of the element in the current iteration)
// to return a single value 
let nums = [1, 2, 4, 10, 13];
let sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue);
let product = nums.reduce((accumulator, currentValue) => accumulator * currentValue);


// some()
// returns true or false depending on if a condition was met for any of the elements in the array
let hasApple = fruits.some(fruit => fruit === 'apple');
