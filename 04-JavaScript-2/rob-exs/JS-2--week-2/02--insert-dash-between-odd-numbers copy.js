// input number and convert to string
const number = 1223344556677889900; // window.prompt();
const string = number.toString();

// insert dash(-) between oddnumbers
function insertDash(num){

  const array = [];

  for (let i = 0; i < num.length; i++) {

    if ((num[i] % 2 === 0) && num[i + 1] % 2 === 0) {

      array.push(num[i] + '-' );

    } else {

      array.push(num[i]);

    }

  }

  return array.join('');

 }

console.log(insertDash(string))
