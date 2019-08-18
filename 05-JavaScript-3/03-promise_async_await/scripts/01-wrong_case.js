/**
 * 
 * First 
 * 
 * We'll use this API to test : https://jsonplaceholder.typicode.com
 * 
 * We don't care about compatibility in this example
 * 
 */

const get = function(url) {
  xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      return xhr.responseText;
    }
  }
  xhr.open('GET', url);
  xhr.send();
}

let users = null;

const getUsers = function() {
  users = get('https://jsonplaceholder.typicode.com/users');
  console.log('user', users);
}

document.getElementById("ex1").addEventListener('click', getUsers);

// Why that code is wrong ???
