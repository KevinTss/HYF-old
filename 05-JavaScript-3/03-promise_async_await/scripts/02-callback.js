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
    xhr.open('GET', url, true);
    xhr.send();
  }

  let users = null

  const getPosts = function() {
    get('https://jsonplaceholder.typicode.com/users', function(response) {
      users = JSON.parse(response);
      console.log('user', users);
    }, function(error) {
      console.log(error);
    })
  }

  document.getElementById("ex2").addEventListener('click', getPosts);

}
