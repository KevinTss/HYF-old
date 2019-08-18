/**
 * 
 * Try to explain why there the function is inside a block => {}
 * 
 * We want to get user from API
 * 
 */

{
  const get = function(url, success, error) {
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(xhr.responseText);
        } else {
          error(xhr);
        }
      } 
    }
    xhr.open('GET', url);
    xhr.send();
  }

  let users = null

  const getUsers = function() {
    get(
      'https://jsonplaceholder.typicode.com/users',

      function(a) {
        users = JSON.parse(a);
        console.log('user', users);
      },
       
      function(error) {
        console.warn(error);
      }
    );
  }

  document.getElementById("ex2").addEventListener('click', getUsers);

}
