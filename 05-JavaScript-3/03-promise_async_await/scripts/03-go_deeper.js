/**
 * 
 * Now we want to get posts of the first user previously get
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

  const getPosts = function(success, error) {
    get(
      'https://jsonplaceholder.typicode.com/users', 
      function(response) {
        const user = JSON.parse(response)[0];
        get(
          'https://jsonplaceholder.typicode.com/posts?userId=' + user.id,    function(response) {
            const posts = JSON.parse(response);
            console.log('POSTS', posts)
            success(posts);
          }, 
          function(err) {
            error(err);
          }
        )
      }, 
      function(err) {
        error(err);
      })
  }

  const logPosts = function() {
    getPosts(
      function(posts) {
        console.log('First post', posts[0])
      }, 
      function(err) {
        console.error(err)
      });
  }

  document.getElementById("ex3").addEventListener('click', logPosts);

}
