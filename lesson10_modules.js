// Modules
// Modules are reusable pieces of code in a file that can be exported and imported to another file
// "module" and "file" are used interchangably

// Implementation of modules
// 1. Using the browser's runtime environment and the ES6 import/export syntax
// 2. Using the Node runtime environment and the module.exports and require() syntax

// Using Node to implement modules
// create the file where functions are declared
// add the functions as properties to the built-in module.exports object
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
   
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
// module.exports is an object built into the Node runtime environment.
// other files import this object, and through this object they can access other functions