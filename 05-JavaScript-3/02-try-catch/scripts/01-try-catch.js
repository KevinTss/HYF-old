/**
 * 
 * src : https://codeburst.io/learn-how-to-handle-javascript-errors-with-try-throw-catch-finally-83b4f9ef8c6f
 * 
 */

const alertSomething = function() {
  alerting("Heelo world");
}
const alertSomethingElse = function() {
  try {
    alerting("Heelo world");
  }
  catch(error) {
      console.log(error);
  }
}

document.getElementById("ex1-1").addEventListener('click', alertSomething);
document.getElementById("ex1-2").addEventListener('click', alertSomethingElse);