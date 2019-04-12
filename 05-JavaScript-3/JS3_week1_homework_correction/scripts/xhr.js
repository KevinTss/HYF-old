const newXHR = function() {

  let xhr;

  // Old compatibility code, no longer needed.
  if (window.XMLHttpRequest) { 
    // Mozilla, Safari, IE7+ ...
    xhr = new XMLHttpRequest();
  } else if (window.ActiveXObject) { 
    // IE 6 and older
    xhr = new ActiveXObject("Microsoft.XMLHTTP");
  }

  return xhr;

}

const get = function(url, success, loading, error) {

  xhr = newXHR();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 0 && xhr.readyState === 1) {
      loading()
    } else if (xhr.readyState === 4) {
      // container.removeChild(container.firstChild)
      if (xhr.status === 200) {
        success(xhr.response)
      } else {
        error(xhr)
      }
    }
  }
  xhr.open('GET', url);
  setTimeout(function(){ 
    xhr.send();
}, 2000);

}
