// Modules
// Modules are reusable pieces of code in a file that can be exported and imported to another file
// "module" and "file" are used interchangably

// Implementation of modules
// 1. Using the browser's runtime environment and the ES6 import/export syntax
// 2. Using the Node runtime environment and the module.exports and require() syntax

// Using Node to implement modules
// create the file where functions are declared
// add the functions as properties to the built-in module.exports object
// *-- assume this file is converters.js --*
function celsiusToFahrenheit(celsius) {
    return celsius * (9/5) + 32;
  }
   
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;
// module.exports is an object built into the Node runtime environment.
// other files import this object, and through this object they can access other functions
// using the require() function:
const converters = require('./converters.js');
// at this point, the module.exports object is now passed by reference to the converters variable
// this way, the converters variable can refer to celsiusToFahrenheit():
converters.celsiusToFahrenheit(0);
converters.celsiusToFahrenheit(100);


// Object destructuring to be selective with require()
// Import a specific function like so:
const { celsiusToFahrenheit } = require('./converters.js');
const celsiusInput = process.argv[2];
const gehrenheitValue = celsiusToFahrenheit(celsiusInput);



// Using the browser runtime environment to implement modules
// create the file where functions are declared
// use the ES6 export syntax to export the functions
// Method 1:
let funct = () => null;
export { funct };
// Method 2:
export let funcky = () => null;

// Note on CORS issue
// Cross Origin Resource Sharing is a mechanism that allows restricted resources on a web page to be requested 
// from another domain outside the domain from which the first resource was served.
// https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
// A local server instance is necessary in order to avoid CORS issues when implementing modules
// This is because when a script is imported as a module, the CORS protocol is required
// Additionally, the type attribute for the <script> tag must be set to module in order to treat a script as a JS module
// See the CORS folder for an example of this issue

// single export
import { singleExport } from './module.js';
// alias
import { superLongExportNameHere  as shorterName } from './module.js';
// multiple export
import { foo, bar } from './modules.js';
// all exports in module
import * as myModule from './module.js';

// default modules
// a module can set a default export (it can be an object, class, function, etc.)
function a() {
  return 'a';
}
function b() {
  return 'b';
}
const resources = {
  a,
  b
}
export default resources;

// the default module can then by imported like so
import defaultAlias from './this.js';
// this is identical to: 
// import { default as defaultAlias } from './this.js';
