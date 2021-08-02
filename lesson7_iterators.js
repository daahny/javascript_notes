// functions are first-class objects
// they are like other objects, they have properties and methods
// every function is a Function object

// funct and funct_var both hold the address of the function. they refer to the same data
function funct() {}
let funct_var = funct;

// invoking the function
funct_var();
funct();

// properties
let function_name = funct.name;
let function_num_of_arguments = funct.length;

// methods
let function_string_of_source_code = funct.toString();


// high-order functions
// a function that accepts functions as parameters and/or returns a function

// callback functions
// functions that get passed as a parameter and are invoked
// this is because they are called during the execution of a higher-order function

