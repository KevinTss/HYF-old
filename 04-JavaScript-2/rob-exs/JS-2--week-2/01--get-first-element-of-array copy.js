const arrayExample = ['1st' , '2nd', '3rd', '4th'];

function getTheFirstElement(array, num) {
  return array.splice(0, num);
}

console.log('Result :', getTheFirstElement(arrayexample, 1))
console.log('Original array: ', arrayexample)
