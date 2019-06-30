




const http = new XMLHttpRequest()



// console.log('http object', http)

// console.log('State', http.readyState);
// console.log('Status', http.status);

const changeStateHandler = function () {
  
  // console.log('http object', http) // to see each readyState
  // console.log(`State: ${http.readyState}, Status: ${http.status}`)
  // console.log('response', http.response)
  
  if (http.readyState === 4) { // if the request is DONE
    if (http.status === 200) { // if the status is successfull
      // console.log('response', JSON.parse(http.response))
      alert(JSON.parse(http.response).sprites.front_female)
    } else if (http.status === 401 ){
      console.log('Hey you have not access buddy')
    } else {
      console.log('not a succes', http.status)
    }
  }
  
}

http.onreadystatechange = changeStateHandler;

http.open('get', 'https://pokeapi.co/api/v2/pokemon/kevin/')


http.send()

