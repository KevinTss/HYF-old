const order = require('./utils.js');

const pay = meal => {
  console.log('Pay function');
  return "PAYED"
};

const myOrder = order();
const myBill = pay(myOrder);
console.log(myBill)