// Array syntax
let arr = ['', undefined, null, 0];
let arr1 = ['', undefined, null, 0];

// Updating arrays
arr[0] = 'nah';


// Arrays with let and const
// Items of a const array are mutable. Items can be added and removed.
// The const array cannot be assigned a new array or new value.
const arr2 = ['a', 'b', 'c'];
arr2[2] = 'd';  // Legal


// length property
let arr_length = arr2.length;


// push and pop
const arr3 = [1, 2, 3];
arr3.push(4, 5);
let removed_item = arr3.pop();


// shift()
// removes first element in an array
arr.shift()


// unshift()
// add element to the beginning of an array
arr.unshift('new item');


// slice()
// return (not extract) a portion of an array spceified by an index range
// inclusive to not inclusive
arr.slice(1, 4) // returns arr[1], arr[2], and arr[3]


// splice()
// extracts a portion of an array specified by an index range
// optionally replace these elements with additional parameters
arr.splice(1, 4, 'new_item_1', 'new_item_2');


// indexOf()
arr.indexOf('pasta');


// concat()
// merges 2 arrays. Non-mutating (does not affect original arrays)
let concated_arr = arr1.concat(arr2);


// join()
// joins all elements into one string, separated by an optional delimiter
let magic_arr = ['Earth', 'Fire', 'Water', 'Air'];
console.log(magic_arr.join(':'));
// prints Earth:Fire:Water:Air


// pass-by-reference: passing a variable by reference, allowing it to be mutated in a function
// arr will be mutated
const mutator = to_be_mutated => to_be_mutated.push('MUTATED');
mutator(arr);


// nested arrays
numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
// prints 6