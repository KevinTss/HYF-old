const http2 = newXHR();

const secondRequest = function() {

  const method = 'GET';
  const url = 'https://restcountries.eu/rest/v2/alpha/be';
  const target = document.getElementById("containerEx2");

  http2.onreadystatechange = function () {
    if (http2.readyState === 4 && http2.status === 200) {
      const response = JSON.parse(http2.response);
      target.innerHTML = 'It is "' + response.name + '" of course bro! ;-)';
    } else {
      target.innerHTML = 'Loading...';
    }
  }

  http2.open(method, url);
  http2.send();

}

document.getElementById("ex2").addEventListener('click', secondRequest);
