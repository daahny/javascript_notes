// A runtime environment is where a program is executed.
// It determines what global objects your program can acess and how the program runs.
// 1. browser runtime environment
// 2. Node runtime environment

// Browser Runtime Environment
// The window object represents a window containing a DOM document.
// The document property points to the DOM document loaded in that window
// This global variable (window) is exposed to JS

// Node Runtime Environment
// Node can't use browser-environment data values and functions
// Instead, Node provides back-end applications access to features unavailable in a browser
// such as a server's file system, database, and network
// For example:
// console.log(process.env.PWD)
//      - process is an object containing data relating to the JS file being executed
//      - process.env is an object containing environment variables
//      - process.env.PWD contains the current working directory