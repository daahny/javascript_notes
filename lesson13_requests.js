/*
// XML HTTP Requests are the traditional way of making restful api requests
// Note, XML HTTP Requests are part of the XHR APIs that browsers implement, node does not provide
// this this API

// Represents an XML HTTP request object
let req = new XMLHttpRequest();
// A property that is an event handler.
// This event handler is equal to a function that is invoked
// every time the readyState property changes
// XMLHttpRequest.readyState property represents the state of the request
// 0 = UNSENT, client is created but open() is not called
// 1 = OPENED, open() has been called
// 2 = HEADERS_RECEIVED, send() has been called, and headers and status are available.
// 3 = LOADING, downloading; responseText holds partial data.
// 4 = DONE, operation is complete
req.onreadystatechange = () => {
    if (req.readyState === 4) {
       console.log('request finished!');
       console.log(req.responseType)
       console.log(req.responseText);
    }
};

// XMLHttpRequest.open() initializes a new request
// open() accepts method and URL as 2 manadatory parameters
// method = HTTP request method (i.e. GET, POST, etc.)
// URL = URL of resource
// 3 optional parameters:
// boolean, true = asynchronous (true if omitted), false = synchronous
// username
// password
req.open("GET", "https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest", true);
*/


// Fetch API provides a more modern way of making RESTful requests
// Note, node does not provide a fetch API either. I have downloaded node-fetch from github
// to implement this functionality. I will note any differences in the Fetch API and node-fetch
// below. Fetch API docs: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

import fetch from 'node-fetch';

// The fetch() method is a global method that takes 2 parameters
// resource = URL or resource, or a Request object
// init = an optional object of custom settings applied to the HTTP request (see below for examples)
// The fetch() method will return a promise object which is fullfilled when the request has been fullfilled.
// The promise resolves to the Response object representing the response to your request.

// Simple POST

const response = await fetch('https://httpbin.org/post', {method: 'POST'});
const data = await response.json();
console.log(data);

