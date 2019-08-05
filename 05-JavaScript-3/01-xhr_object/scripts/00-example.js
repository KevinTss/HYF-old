// Complete example

const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {

  if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr.response)
  }

}

xhr.open('GET', 'https://dog.ceo/api/breed/cairn/images/random');

xhr.send();

// post example

const xhr2 = new XMLHttpRequest();

xhr2.onreadystatechange = function () {
  if (xhr2.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
    console.log(xhr2.response);
  }
}

xhr2.open('POST', 'https://jsonplaceholder.typicode.com/posts');
xhr2.send('userId=1&title=My title&body=my body post very cool');
