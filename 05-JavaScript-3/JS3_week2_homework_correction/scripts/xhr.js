const newXHR = function() {
  let xhr;
  if (window.XMLHttpRequest) { 
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }
  return xhr;
}

const get = function(url, loading) {
  return new Promise(function(resolve, reject) {
    xhr = newXHR();
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== 0 && xhr.readyState === 1) {
        loading();
      } else if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr);
        }
      }
    }
    xhr.open('GET', url);
    setTimeout(function(){ 
      xhr.send();
    }, 2000);
  })
}
