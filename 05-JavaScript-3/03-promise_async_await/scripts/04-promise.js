/**
 * 
 * Here we use promise for the same target, get posts of first user
 * 
 * Doc : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * 
 */

{
  const get = function(url) {
    return new Promise(function(resolve, reject) {
      xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(xhr.responseText);
          } else {
            reject(xhr);
          }
        } 
      }
      xhr.open('GET', url, true);
      xhr.send();
    })
  }

  const catchError = function(e) {
    console.error(e);
  }

  const getPosts = function() {
    return new Promise(function(resolve, reject) {
      get('https://jsonplaceholder.typicode.com/users').then(function(response) {
        const user = JSON.parse(response)[0];
        get('https://jsonplaceholder.typicode.com/posts?userId=' + user.id).then(function(response) {
          const posts = JSON.parse(response);
          resolve(posts)
        }).catch(reject)
      }).catch(reject)
    })
  }

  const logPosts = function() {
    getPosts().then(function(posts) {
      console.log('First post', posts[0])
    }, catchError);
  }

  document.getElementById("ex4").addEventListener('click', logPosts);

}
