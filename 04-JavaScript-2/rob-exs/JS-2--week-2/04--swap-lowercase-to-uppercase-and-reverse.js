var input = window.prompt();

function convertCharacter(str) {

  var str = str.split('');

  for(var i = 0; i < str.length; i++) {

    if(str[i] == str[i].toLowerCase()){
      str[i] = str[i].toUpperCase()
    }
    else {
      str[i] = str[i].toLowerCase()
    }
  }
  return str.join('');
}
console.log(input);
console.log(convertCharacter(input));