













function log(value){
  console.log(value);
}

// log("kevin")

function sayHello(name, logFunction){ 
  const sayHelloSentence = "Hello, " + name + ", nice to meeet you";
  logFunction(sayHelloSentence);
}


sayHello("John", function(value){console.log(value)});
sayHello("Kevin");

/**
 * 1) ...
 */

// console.log('type: ', typeof log);
// console.dir(log);
// console.log('execution: ', log());


