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

// practical example. kelvin to celsius to fahrenheit
// C + 273.15 = K
// (C x 9/5) + 32 = F

function KelvinToFahrenheit(funct, val) {
    let celsius = funct(val);
    return (celsius * 9/5) + 32;
}

function KelvinToCelsius(val) {
    return (val - 273.15);
}

console.log('0 Kelvin in Fahrenheit: ' + KelvinToFahrenheit(KelvinToCelsius, 0));

// while this seems illogical, the combo of high-order and callback functions adds versatility
// since a high-order function can accept any callback functions

// remember, do not invoke the callback function when passing it as a argument
// otherwise, the return value is sent instead of the function itself