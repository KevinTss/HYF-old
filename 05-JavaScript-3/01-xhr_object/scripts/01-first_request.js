/**
 * 
 * First you have to create your httpRequest Object
 * 
 * See doc here : https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started
 * 
 */

// Create our http object XHR

const newXHR = function() {

  let httpRequest;

  // Old compatibility code, no longer needed.
  if (window.XMLHttpRequest) { 
    // Mozilla, Safari, IE7+ ...
    httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    // IE 6 and older
    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  return httpRequest;

}

const http = newXHR();

// Add function in key : onreadystatechange
// Just log the state 

const changeStateHandler = function () {

  console.log('State', http.readyState);
  console.log('Status', http.status);

  if (http.readyState === 4 && http.status === 200) {
    console.log('response', http.response);
  }

}

http.onreadystatechange = changeStateHandler;

const firstRequest = function(parse) {
  
  // Initialize the request 
  // Chose GET methods
  const method = 'GET';
  
  // Url for the request
  // ex: rest countries : https://restcountries.eu/
  const url = 'https://restcountries.eu/rest/v2/alpha/be';

  http.open(method, url);
  http.send();

}

document.getElementById("ex1").addEventListener('click', firstRequest);