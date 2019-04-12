// use : https://jsonplaceholder.typicode.com/

const http3 = newXHR();

const thirdRequest = function() {

  const method = 'POST';
  const url = 'https://jsonplaceholder.typicode.com/posts/1';
  const async = true;
  const params = JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
  // const target = document.getElementById("containerEx2");

  console.log(http3.setRequestHeader)

  // http3.setRequestHeader('Content-type', 'application/json; charset=UTF-8');
  http3.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http3.onreadystatechange = function () {
    if (http3.readyState === 4 && http3.status === 200) {
      // const response = JSON.parse(httpRequest.response);
      console.log(http3.response)
      // target.innerHTML = 'It is "' + response.name + '" of course bro! ;-)';
    } else {
      // target.innerHTML = 'Loading...';
    }
  }

  // http3.open(method, url, async);
  // http3.send(params);

}

document.getElementById("ex3").addEventListener('click', thirdRequest);
